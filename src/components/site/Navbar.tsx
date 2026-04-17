import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#warum-wir", label: "Warum wir" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className={cn("text-base md:text-lg", scrolled ? "text-foreground" : "text-white")}>
            Abdelhady <span className="text-primary-glow">Grünpflege</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground" : "text-white/90",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-deep transition-colors"
        >
          Angebot anfragen
        </a>

        <button
          className={cn("md:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-white")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <ul className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Angebot anfragen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
