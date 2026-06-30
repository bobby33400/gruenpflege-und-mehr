// Sends an email notification (via Resend) when a contact form is submitted.
//
// Triggered from the website right after the row is inserted into
// `contact_submissions`. Also accepts a Supabase Database Webhook payload
// (`{ record: {...} }`), so it can be wired to a DB webhook instead/later
// without code changes.
//
// Required secret:  RESEND_API_KEY
// Optional secrets:  CONTACT_NOTIFY_TO, CONTACT_NOTIFY_FROM
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_TO = Deno.env.get("CONTACT_NOTIFY_TO") ?? "n@abdelhady-gruenpflege.de";
// Until your own domain is verified in Resend, the shared test sender works
// for delivering to your own inbox.
const NOTIFY_FROM =
  Deno.env.get("CONTACT_NOTIFY_FROM") ?? "Abdelhady Grünpflege <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Email service not configured" }, 500);
  }

  try {
    const body = await req.json().catch(() => ({}));
    // Support both a direct call ({ name, ... }) and a DB webhook ({ record: {...} }).
    const data = (body && typeof body === "object" && "record" in body ? body.record : body) ?? {};

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (
      !name || name.length > 100 ||
      email.length < 3 || email.length > 255 ||
      !phone || phone.length > 40 ||
      !message || message.length > 2000
    ) {
      return json({ error: "Invalid input" }, 400);
    }

    const subject = `Neue Kontaktanfrage von ${name}`;
    const text =
      `Neue Kontaktanfrage über die Website\n\n` +
      `Name:     ${name}\n` +
      `E-Mail:   ${email}\n` +
      `Telefon:  ${phone}\n\n` +
      `Nachricht:\n${message}\n`;

    const html = `<!doctype html><html lang="de"><body style="margin:0;background:#f0fdf4;font-family:Arial,Helvetica,sans-serif;color:#14532d;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#15803d;color:#ffffff;padding:20px 24px;border-radius:16px 16px 0 0;">
      <h1 style="margin:0;font-size:18px;">Neue Kontaktanfrage</h1>
      <p style="margin:4px 0 0;font-size:13px;opacity:.85;">über abdelhady-gruenpflege.de</p>
    </div>
    <div style="background:#ffffff;padding:24px;border:1px solid #bbf7d0;border-top:none;border-radius:0 0 16px 16px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#4b5563;width:90px;">Name</td><td style="padding:6px 0;font-weight:bold;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#4b5563;">E-Mail</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#15803d;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#4b5563;">Telefon</td><td style="padding:6px 0;"><a href="tel:${escapeHtml(phone)}" style="color:#15803d;">${escapeHtml(phone)}</a></td></tr>
      </table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb;">
        <p style="margin:0 0 6px;color:#4b5563;font-size:14px;">Nachricht</p>
        <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    </div>
    <p style="text-align:center;color:#6b7280;font-size:12px;margin-top:16px;">Antworten Sie direkt auf diese E-Mail, um ${escapeHtml(name)} zu erreichen.</p>
  </div>
</body></html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return json({ error: "Email send failed" }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("notify-contact error:", err);
    return json({ error: "Internal error" }, 500);
  }
});
