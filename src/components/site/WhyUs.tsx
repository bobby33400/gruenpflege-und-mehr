import { Clock, BadgeEuro, CalendarCheck, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WaveDivider } from "./WaveDivider";

const items = [
  { icon: Clock, title: "Zuverlässig & pünktlich", desc: "Termintreue und klare Kommunikation – darauf können Sie zählen." },
  { icon: BadgeEuro, title: "Faire Preise", desc: "Transparente Angebote ohne versteckte Kosten." },
  { icon: CalendarCheck, title: "Flexible Termine", desc: "Auch kurzfristig – wir richten uns nach Ihnen." },
  { icon: ShieldCheck, title: "Erfahrung & Sorgfalt", desc: "Jahrelange Erfahrung in Garten- und Umzugsservice." },
];

export function WhyUs() {
  return (
    <section
      id="warum-wir"
      className="relative bg-secondary pt-20 md:pt-28 pb-28 md:pb-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Warum wir" title="Vertrauen, das wächst">
          Persönlich, ehrlich und gründlich – wir behandeln Ihren Garten und
          Ihren Umzug so, als wären es unsere eigenen.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl bg-background p-7 border border-border shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-leaf)]"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
                <it.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider color="var(--color-background)" />
    </section>
  );
}
