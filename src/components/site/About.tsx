import { Check, Sprout } from "lucide-react";
import aboutImg from "@/assets/gallery-garden.jpg";
import { SectionHeading } from "./SectionHeading";
import { WaveDivider } from "./WaveDivider";

const values = ["Lokal verwurzelt", "Ehrlich & fair", "Sorgfältig & gründlich"];

export function About() {
  return (
    <section
      id="ueber-uns"
      className="relative bg-background pt-20 md:pt-28 pb-28 md:pb-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="relative order-last lg:order-first">
          <span
            aria-hidden="true"
            className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -right-5 -bottom-5 h-24 w-24 rounded-full bg-warm-soft"
          />
          <img
            src={aboutImg}
            alt="Gepflegter Garten mit bunten Blumenbeeten"
            loading="lazy"
            width={1024}
            height={768}
            className="relative w-full aspect-[4/3] object-cover rounded-[2rem] md:rounded-[2.5rem] shadow-[var(--shadow-leaf)]"
          />
          <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-[var(--shadow-card)]">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary text-primary-foreground">
              <Sprout className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-foreground leading-tight">
              Lokal & persönlich
              <span className="block text-xs font-normal text-muted-foreground">
                in Oedheim & Umgebung
              </span>
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionHeading eyebrow="Über uns" title="Lokal verwurzelt, persönlich engagiert" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Abdelhady Grünpflege</span> ist
            Ihr lokaler Ansprechpartner für Garten- und Umzugsdienstleistungen in
            Deutschland. Mit Leidenschaft, Sorgfalt und langjähriger Erfahrung
            unterstützen wir Privatkunden und Unternehmen – ehrlich, fair und mit
            dem Anspruch, jede Aufgabe sauber und zuverlässig zu erledigen.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map((v) => (
              <li
                key={v}
                className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground"
              >
                <span className="grid place-items-center h-6 w-6 shrink-0 rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {v}
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-deep hover:-translate-y-0.5 transition-all duration-300"
          >
            Lernen Sie uns kennen
          </a>
        </div>
      </div>

      <WaveDivider color="var(--color-secondary)" />
    </section>
  );
}
