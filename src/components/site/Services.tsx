import { Leaf, Scissors, Truck, PackageOpen, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WaveDivider } from "./WaveDivider";

const services = [
  {
    icon: Leaf,
    title: "Grünpflege",
    desc: "Professionelle Pflege Ihrer Grünflächen – ganzjährig zuverlässig und gründlich.",
  },
  {
    icon: Scissors,
    title: "Gartenarbeit",
    desc: "Rasen mähen, Heckenschnitt und Unkraut entfernen – Ihr Garten in besten Händen.",
  },
  {
    icon: Wrench,
    title: "Hausmeisterservice",
    desc: "Zuverlässige Betreuung Ihrer Immobilie – kleine Reparaturen, Reinigung und regelmäßige Kontrollen.",
  },
  {
    icon: Truck,
    title: "Umzüge",
    desc: "Stressfreie Privat- und Firmenumzüge – pünktlich, sicher und sorgfältig.",
  },
  {
    icon: PackageOpen,
    title: "Transport & Entrümpelung",
    desc: "Möbeltransport und Entrümpelungen – fair, schnell und sauber erledigt.",
  },
];

export function Services() {
  return (
    <section
      id="leistungen"
      className="relative bg-background pt-20 md:pt-28 pb-28 md:pb-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leistungen" title="Alles aus einer Hand">
          Vom gepflegten Rasen bis zum reibungslosen Umzug – wir bieten
          zuverlässige Dienstleistungen rund um Garten, Transport und
          Entrümpelung.
        </SectionHeading>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 [&>*:nth-child(1)]:lg:col-span-2 [&>*:nth-child(2)]:lg:col-span-2 [&>*:nth-child(3)]:lg:col-span-2 [&>*:nth-child(4)]:lg:col-span-3 [&>*:nth-child(5)]:lg:col-span-3 [&>*:nth-child(5)]:sm:col-span-2 [&>*:nth-child(5)]:sm:max-w-[calc(50%-0.75rem)] [&>*:nth-child(5)]:sm:mx-auto [&>*:nth-child(5)]:sm:w-full [&>*:nth-child(5)]:lg:max-w-none">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative w-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-leaf)]"
            >
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/60 transition-transform duration-500 group-hover:scale-150"
              />
              <div className="relative grid place-items-center h-14 w-14 rounded-2xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="relative mt-5 font-serif text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      <WaveDivider color="var(--color-secondary)" />
    </section>
  );
}
