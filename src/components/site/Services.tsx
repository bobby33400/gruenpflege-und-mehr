import { Leaf, Scissors, Truck, PackageOpen } from "lucide-react";

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
    <section id="leistungen" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Leistungen</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vom gepflegten Rasen bis zum reibungslosen Umzug – wir bieten
            zuverlässige Dienstleistungen rund um Garten, Transport und
            Entrümpelung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 80}ms` }}
            >
              <div className="grid place-items-center h-12 w-12 rounded-lg bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
