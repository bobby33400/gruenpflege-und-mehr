import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Bitte Namen eingeben").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  phone: z.string().trim().min(1, "Bitte Telefonnummer eingeben").max(40),
  message: z.string().trim().min(1, "Bitte Nachricht eingeben").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setStatus({ ok: false, msg: parsed.error.issues[0]?.message ?? "Bitte Eingaben prüfen." });
      return;
    }
    const body = `Name: ${parsed.data.name}%0ATelefon: ${parsed.data.phone}%0AE-Mail: ${parsed.data.email}%0A%0A${encodeURIComponent(parsed.data.message)}`;
    window.location.href = `mailto:kontakt@abdelhady-gruenpflege.de?subject=Angebotsanfrage&body=${body}`;
    setStatus({ ok: true, msg: "Vielen Dank! Ihre E-Mail wird vorbereitet." });
    e.currentTarget.reset();
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Kontakt</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Kostenloses Angebot erhalten
          </h2>
          <p className="mt-4 text-muted-foreground">
            Schreiben Sie uns – wir melden uns schnellstmöglich mit einem
            unverbindlichen Angebot zurück.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-accent text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <a href="tel:+4915155510325" className="text-foreground hover:text-primary">
                0151 55510325
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-accent text-primary">
                <MessageCircle className="h-5 w-5" />
              </span>
              <a
                href="https://wa.me/4915000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                WhatsApp Chat starten
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-accent text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <a href="mailto:kontakt@abdelhady-gruenpflege.de" className="text-foreground hover:text-primary">
                kontakt@abdelhady-gruenpflege.de
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-accent text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-foreground">Deutschland</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Ihr Name" />
            <Field label="Telefonnummer" name="phone" placeholder="+49 ..." type="tel" />
          </div>
          <div className="mt-4">
            <Field label="E-Mail" name="email" placeholder="ihre@email.de" type="email" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-foreground">Nachricht</label>
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Wie können wir helfen?"
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {status && (
            <p className={`mt-4 text-sm ${status.ok ? "text-primary" : "text-destructive"}`}>
              {status.msg}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
          >
            Kostenloses Angebot erhalten
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        maxLength={255}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
