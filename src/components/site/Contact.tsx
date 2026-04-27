import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Bitte Namen eingeben").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  phone: z.string().trim().min(1, "Bitte Telefonnummer eingeben").max(40),
  message: z.string().trim().min(1, "Bitte Nachricht eingeben").max(2000),
});

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
      setErrorMsg(parsed.error.issues[0]?.message ?? "Bitte Eingaben prüfen.");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("contact_submissions")
      .insert(parsed.data);
    setLoading(false);

    if (error) {
      console.error("Kontaktformular Fehler:", error);
      setErrorMsg(
        "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen oder uns direkt anrufen."
      );
      toast.error("Anfrage konnte nicht gesendet werden.");
      return;
    }

    toast.success("Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.");
    formEl.reset();
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
                href="https://wa.me/4915155510325"
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
              <a href="mailto:n@abdelhady-gruenpflege.de" className="text-foreground hover:text-primary">
                n@abdelhady-gruenpflege.de
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
            <Field label="Name" name="name" placeholder="Ihr Name" required />
            <Field label="Telefonnummer" name="phone" placeholder="+49 ..." type="tel" required />
          </div>
          <div className="mt-4">
            <Field label="E-Mail" name="email" placeholder="ihre@email.de" type="email" required />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="message">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={2000}
              required
              placeholder="Wie können wir helfen?"
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {errorMsg && (
            <p className="mt-4 text-sm text-destructive" role="alert">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-deep transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Wird gesendet..." : "Kostenloses Angebot erhalten"}
          </button>

          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            Mit dem Absenden willigen Sie ein, dass Ihre Angaben zur
            Bearbeitung Ihrer Anfrage verarbeitet werden. Weitere Informationen
            finden Sie in unserer{" "}
            <Link to="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>
            . Sie können Ihre Einwilligung jederzeit per E-Mail widerrufen.
          </p>
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
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        maxLength={255}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
