import { ArrowRight, Check, Sprout } from "lucide-react";
import heroImg from "@/assets/hero-garden.jpg";
import { WaveDivider } from "./WaveDivider";

const trust = ["Zuverlässig & pünktlich", "Faire Festpreise", "Kostenlose Beratung"];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Gepflegter grüner Garten mit Heckenschnitt"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium border border-white/25">
            <Sprout className="h-4 w-4 text-primary-glow" aria-hidden="true" />
            Grünpflege & Umzüge in Deutschland
          </span>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08]">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-primary-glow">Grünpflege & Umzüge</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Zuverlässig, schnell und fair – wir kümmern uns um Ihren Garten und
            Ihren Umzug mit Sorgfalt und langjähriger Erfahrung.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary-deep hover:-translate-y-0.5 transition-all duration-300"
            >
              Jetzt Angebot anfragen
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors duration-300"
            >
              Unsere Leistungen
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <span className="grid place-items-center h-6 w-6 rounded-full bg-primary-glow/25 text-primary-glow">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#leistungen"
        aria-label="Nach unten scrollen"
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 hidden sm:grid place-items-center h-11 w-7 rounded-full border-2 border-white/40 pt-2 hover:border-white/70 transition-colors"
      >
        <span className="h-2 w-1 rounded-full bg-white/80 animate-sway" />
      </a>

      <WaveDivider color="var(--color-background)" />
    </section>
  );
}
