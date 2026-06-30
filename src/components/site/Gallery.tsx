import hedge from "@/assets/gallery-hedge.jpg";
import lawn from "@/assets/gallery-lawn.jpg";
import moving from "@/assets/gallery-moving.jpg";
import garden from "@/assets/gallery-garden.jpg";
import { SectionHeading } from "./SectionHeading";
import { WaveDivider } from "./WaveDivider";

const items = [
  { src: lawn, label: "Rasenpflege", alt: "Frisch gemähter Rasen mit Streifenmuster" },
  { src: hedge, label: "Heckenschnitt", alt: "Heckenschnitt durch professionellen Gärtner" },
  { src: garden, label: "Gartengestaltung", alt: "Gepflegter Garten mit Blumenbeeten" },
  { src: moving, label: "Umzüge & Transport", alt: "Möbeltransport mit Umzugswagen" },
];

export function Gallery() {
  return (
    <section
      id="galerie"
      className="relative bg-secondary pt-20 md:pt-28 pb-28 md:pb-40 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Galerie" title="Einblicke in unsere Arbeit">
          Ein Eindruck von dem, was wir täglich mit Sorgfalt und Freude erledigen.
        </SectionHeading>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <figure
              key={it.label}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] border border-border shadow-[var(--shadow-card)]"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex translate-y-1 items-center rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white opacity-95 transition-transform duration-300 group-hover:translate-y-0">
                  {it.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <WaveDivider color="var(--color-background)" />
    </section>
  );
}
