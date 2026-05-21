import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
