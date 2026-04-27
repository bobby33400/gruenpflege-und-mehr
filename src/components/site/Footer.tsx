import { Leaf } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.02_240)] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-semibold">Abdelhady Grünpflege</span>
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            Ihr lokaler Partner für Grünpflege, Umzüge und Transporte in Deutschland.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold text-white">Kontakt</h4>
          <ul className="mt-3 space-y-2">
            <li>Deutschland</li>
            <li>
              <a href="tel:+4915155510325" className="hover:text-primary-glow">0151 55510325</a>
            </li>
            <li>
              <a href="mailto:n@abdelhady-gruenpflege.de" className="hover:text-primary-glow">
                n@abdelhady-gruenpflege.de
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold text-white">Rechtliches</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/impressum" className="hover:text-primary-glow">Impressum</Link></li>
            <li><a href="#" className="hover:text-primary-glow">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Abdelhady Grünpflege. Alle Rechte vorbehalten.</p>
          <p>Made with care in Germany 🇩🇪</p>
        </div>
      </div>
    </footer>
  );
}
