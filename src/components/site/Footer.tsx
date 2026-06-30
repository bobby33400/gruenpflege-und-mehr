import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { href: "#leistungen", label: "Grünpflege & Garten" },
  { href: "#leistungen", label: "Hausmeisterservice" },
  { href: "#leistungen", label: "Umzüge & Transport" },
  { href: "#galerie", label: "Galerie" },
];

export function Footer() {
  return (
    <footer
      className="text-white/80"
      style={{ backgroundColor: "var(--color-primary-deep)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 text-white">
            <img
              src={logo}
              alt="Abdelhady Grünpflege Logo"
              className="h-9 w-9 md:h-10 md:w-10 object-contain shrink-0"
            />
            <span className="font-serif text-lg font-semibold">Abdelhady Grünpflege</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
            Ihr lokaler Partner für Grünpflege, Umzüge und Transporte in
            Oedheim und Umgebung – zuverlässig, fair und mit Sorgfalt.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-serif text-base font-semibold text-white">Leistungen</h4>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/70 transition-colors hover:text-primary-glow">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-serif text-base font-semibold text-white">Kontakt</h4>
          <ul className="mt-4 space-y-2.5 text-white/70">
            <li>Oedheim, Deutschland</li>
            <li>
              <a href="tel:+4915155510325" className="transition-colors hover:text-primary-glow">
                0151 55510325
              </a>
            </li>
            <li>
              <a href="mailto:n@abdelhady-gruenpflege.de" className="transition-colors hover:text-primary-glow">
                n@abdelhady-gruenpflege.de
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-serif text-base font-semibold text-white">Rechtliches</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/impressum" className="text-white/70 transition-colors hover:text-primary-glow">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="text-white/70 transition-colors hover:text-primary-glow">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Abdelhady Grünpflege. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
