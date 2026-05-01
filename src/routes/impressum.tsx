import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
  head: () => ({
    meta: [
      { title: "Impressum – Abdelhady Grünpflege" },
      {
        name: "description",
        content:
          "Impressum von Abdelhady Grünpflege, Oedheim – Anbieterkennzeichnung gemäß § 5 TMG und § 55 RStV.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">Impressum</h1>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>Abdelhady Grünpflege</p>
          <p>Inhaber: Nour Aldeen Abdelhady</p>
          <p>Am Willenbach 3/1</p>
          <p>74229 Oedheim</p>
          <p>Deutschland</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:+4915155510325" className="text-primary hover:underline">
              0151 55510325
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:n@abdelhady-gruenpflege.de"
              className="text-primary hover:underline"
            >
              n@abdelhady-gruenpflege.de
            </a>
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
          <p>Wirtschafts-IdNr: DE420812382</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Nour Aldeen Abdelhady</p>
          <p>Am Willenbach 3/1</p>
          <p>74229 Oedheim</p>
          <p>Deutschland</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">
            Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
          <p className="text-muted-foreground">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </main>
    </div>
  );
}
