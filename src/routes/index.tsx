import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const SITE_URL = "https://gruenpflege-und-mehr.lovable.app";
const PAGE_TITLE =
  "Abdelhady Grünpflege Oedheim | Gartenpflege, Umzüge & Transporte";
const PAGE_DESCRIPTION =
  "Abdelhady Grünpflege aus Oedheim: Rasen mähen, Heckenschnitt, Unkraut entfernen, Grünpflege, Umzüge, Möbeltransport & Entrümpelung. Faire Preise, schnelle Termine – jetzt kostenloses Angebot anfragen.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Grünpflege, Gartenpflege, Rasen mähen, Heckenschnitt, Unkraut entfernen, Umzüge, Möbeltransport, Entrümpelung, Oedheim, Heilbronn, Deutschland",
      },
      { name: "author", content: "Abdelhady Grünpflege" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "DE-BW" },
      { name: "geo.placename", content: "Oedheim" },

      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:site_name", content: "Abdelhady Grünpflege" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Abdelhady Grünpflege",
          image: `${SITE_URL}/og-image.jpg`,
          url: SITE_URL,
          telephone: "+49 151 55510325",
          email: "n@abdelhady-gruenpflege.de",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Am Willenbach 3/1",
            postalCode: "74229",
            addressLocality: "Oedheim",
            addressCountry: "DE",
          },
          areaServed: "Deutschland",
          description: PAGE_DESCRIPTION,
          priceRange: "€€",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
