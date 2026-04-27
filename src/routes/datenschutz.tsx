import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  component: Datenschutz,
  head: () => ({
    meta: [
      { title: "Datenschutz – Abdelhady Grünpflege" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Abdelhady Grünpflege – Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          (Platzhaltertext – bitte vor Veröffentlichung durch eine rechtssichere
          Erklärung ersetzen.)
        </p>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Abdelhady Grünpflege<br />
            Nour Aldeen Abdelhady<br />
            Am Willenbach 3/1, 74229 Oedheim<br />
            Telefon: 0151 55510325<br />
            E-Mail: n@abdelhady-gruenpflege.de
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Besuch unserer Website werden automatisch Informationen
            allgemeiner Natur erfasst (z. B. IP-Adresse, Browsertyp, Datum
            und Uhrzeit des Zugriffs). Diese Daten werden ausschließlich zur
            Sicherstellung eines störungsfreien Betriebs verarbeitet.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">3. Kontaktformular & E-Mail-Kontakt</h2>
          <p>
            Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
            werden die von Ihnen mitgeteilten Daten (Name, E-Mail, Telefon,
            Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Wenden
            Sie sich hierzu an die oben genannten Kontaktdaten.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">5. Cookies</h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies.
            Es findet kein Tracking statt.
          </p>
        </section>

        <p className="mt-10 text-sm text-muted-foreground">
          Stand: {new Date().getFullYear()}
        </p>
      </main>
    </div>
  );
}
