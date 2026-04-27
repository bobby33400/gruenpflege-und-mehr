import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
  head: () => ({
    meta: [
      { title: "Impressum – Abdelhady Grünpflege" },
      { name: "description", content: "Impressum von Abdelhady Grünpflege, Oedheim." },
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

        <section className="mt-8 space-y-2 text-foreground">
          <p className="font-semibold">Angaben gemäß § 5 TMG</p>
          <p>Abdelhady Grünpflege</p>
          <p>Nour Aldeen Abdelhady</p>
          <p>Am Willenbach 3/1</p>
          <p>74229 Oedheim</p>
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
          <h2 className="text-xl font-semibold">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Nour Aldeen Abdelhady</p>
          <p>Am Willenbach 3/1, 74229 Oedheim</p>
        </section>
      </main>
    </div>
  );
}
