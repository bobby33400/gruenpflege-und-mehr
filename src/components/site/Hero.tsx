import heroImg from "@/assets/hero-garden.jpg";

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
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm pl-1.5 pr-4 py-1.5 text-sm font-medium border border-white/20">
            <img src={logo} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
            Grünpflege & Umzüge in Deutschland
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-primary-glow">Grünpflege & Umzüge</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
            Zuverlässig, schnell und fair – wir kümmern uns um Ihren Garten und
            Ihren Umzug mit Sorgfalt und Erfahrung.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary-deep hover:-translate-y-0.5 transition-all"
            >
              Jetzt Angebot anfragen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
