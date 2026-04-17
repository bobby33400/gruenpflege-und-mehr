import { Clock, BadgeEuro, CalendarCheck, ShieldCheck } from "lucide-react";

const items = [
  { icon: Clock, title: "Zuverlässig & pünktlich", desc: "Termintreue und klare Kommunikation – darauf können Sie zählen." },
  { icon: BadgeEuro, title: "Faire Preise", desc: "Transparente Angebote ohne versteckte Kosten." },
  { icon: CalendarCheck, title: "Flexible Termine", desc: "Auch kurzfristig – wir richten uns nach Ihnen." },
  { icon: ShieldCheck, title: "Erfahrung & Sorgfalt", desc: "Jahrelange Erfahrung in Garten- und Umzugsservice." },
];

export function WhyUs() {
  return (
    <section id="warum-wir" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Warum wir</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Vertrauen, das wächst
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="flex gap-4 rounded-xl bg-background p-6 border border-border">
              <div className="grid place-items-center h-11 w-11 shrink-0 rounded-lg bg-primary text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
