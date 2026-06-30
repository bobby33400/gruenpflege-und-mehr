import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeading } from "./SectionHeading";
import { WaveDivider } from "./WaveDivider";

const schema = z.object({
  name: z.string().trim().min(1, "Bitte Namen eingeben").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  phone: z.string().trim().min(1, "Bitte Telefonnummer eingeben").max(40),
  message: z.string().trim().min(1, "Bitte Nachricht eingeben").max(2000),
});

const contactMethods = [
  { icon: Phone, label: "0151 55510325", href: "tel:+4915155510325" },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat starten",
    href: "https://wa.me/4915155510325",
    external: true,
  },
  { icon: Mail, label: "n@abdelhady-gruenpflege.de", href: "mailto:n@abdelhady-gruenpflege.de" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      setErrorMsg(issue?.message ?? "Bitte Eingaben prüfen.");
      const fieldId = issue?.path[0];
      if (typeof fieldId === "string") {
        formEl.querySelector<HTMLElement>(`#${fieldId}`)?.focus();
      }
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("contact_submissions")
      .insert(parsed.data);

    if (error) {
      setLoading(false);
      console.error("Kontaktformular Fehler:", error);
      setErrorMsg(
        "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen oder uns direkt anrufen."
      );
      toast.error("Anfrage konnte nicht gesendet werden.");
      return;
    }

    // Notify by email. The submission is already saved, so a failed
    // notification must not block the user's confirmation.
    try {
      const { error: notifyError } = await supabase.functions.invoke(
        "notify-contact",
        { body: parsed.data },
      );
      if (notifyError) console.error("E-Mail-Benachrichtigung fehlgeschlagen:", notifyError);
    } catch (notifyErr) {
      console.error("E-Mail-Benachrichtigung fehlgeschlagen:", notifyErr);
    }

    setLoading(false);
    toast.success("Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.");
    formEl.reset();
  };

  return (
    <section
      id="kontakt"
      className="relative bg-background pt-20 md:pt-28 pb-28 md:pb-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading eyebrow="Kontakt" title="Kostenloses Angebot erhalten">
            Schreiben Sie uns – wir melden uns schnellstmöglich mit einem
            unverbindlichen Angebot zurück.
          </SectionHeading>

          <ul className="mt-8 space-y-3">
            {contactMethods.map((m) => (
              <li key={m.label}>
                <a
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <m.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{m.label}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 rounded-2xl px-4 py-2 text-muted-foreground">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-secondary text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-medium">Oedheim & Umgebung, Deutschland</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-leaf)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Ihr Name" required maxLength={100} autoComplete="name" />
            <Field label="Telefonnummer" name="phone" placeholder="+49 ..." type="tel" inputMode="tel" autoComplete="tel" required maxLength={40} />
          </div>
          <div className="mt-4">
            <Field label="E-Mail" name="email" placeholder="ihre@email.de" type="email" inputMode="email" autoComplete="email" required maxLength={255} />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="message">
              Nachricht <span className="text-warm" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={2000}
              required
              placeholder="Wie können wir helfen?"
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-base transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>

          {errorMsg && (
            <p className="mt-4 text-sm font-medium text-destructive" role="alert" aria-live="polite">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary-deep hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
            {loading ? "Wird gesendet..." : "Kostenloses Angebot erhalten"}
          </button>

          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            Mit dem Absenden willigen Sie ein, dass Ihre Angaben zur
            Bearbeitung Ihrer Anfrage verarbeitet werden. Weitere Informationen
            finden Sie in unserer{" "}
            <Link to="/datenschutz" className="text-primary font-medium hover:underline">
              Datenschutzerklärung
            </Link>
            . Sie können Ihre Einwilligung jederzeit per E-Mail widerrufen.
          </p>
        </form>
      </div>

      <WaveDivider color="var(--color-primary-deep)" />
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  maxLength = 255,
  inputMode,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={name}>
        {label}{" "}
        {required && (
          <span className="text-warm" aria-hidden="true">*</span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        maxLength={maxLength}
        required={required}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-base transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
