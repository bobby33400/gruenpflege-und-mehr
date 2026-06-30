import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-serif text-8xl font-semibold text-primary">404</p>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Seite nicht gefunden
        </h1>
        <p className="mt-3 text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary-deep hover:-translate-y-0.5"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abdelhady Grünpflege | Gartenpflege, Umzüge & Transporte" },
      { name: "description", content: "Abdelhady Grünpflege aus Oedheim: Rasen mähen, Heckenschnitt, Unkraut entfernen, Grünpflege, Umzüge, Möbeltransport & Entrümpelung. Faire Preise, schnelle Termine." },
      { name: "author", content: "Abdelhady Grünpflege" },
      { property: "og:title", content: "Abdelhady Grünpflege | Gartenpflege, Umzüge & Transporte" },
      { property: "og:description", content: "Abdelhady Grünpflege aus Oedheim: Rasen mähen, Heckenschnitt, Unkraut entfernen, Grünpflege, Umzüge, Möbeltransport & Entrümpelung. Faire Preise, schnelle Termine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Abdelhady Grünpflege | Gartenpflege, Umzüge & Transporte" },
      { name: "twitter:description", content: "Abdelhady Grünpflege aus Oedheim: Rasen mähen, Heckenschnitt, Unkraut entfernen, Grünpflege, Umzüge, Möbeltransport & Entrümpelung." },
      { property: "og:image", content: "https://gruenpflege-und-mehr.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://gruenpflege-und-mehr.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..600&family=Raleway:wght@300..700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster richColors position="top-center" />
    </>
  );
}
