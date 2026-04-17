import hedge from "@/assets/gallery-hedge.jpg";
import lawn from "@/assets/gallery-lawn.jpg";
import moving from "@/assets/gallery-moving.jpg";
import garden from "@/assets/gallery-garden.jpg";

const items = [
  { src: lawn, alt: "Frisch gemähter Rasen mit Streifenmuster" },
  { src: hedge, alt: "Heckenschnitt durch professionellen Gärtner" },
  { src: garden, alt: "Gepflegter Garten mit Blumenbeeten" },
  { src: moving, alt: "Möbeltransport mit Umzugswagen" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Galerie</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Einblicke in unsere Arbeit
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <figure
              key={it.alt}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
