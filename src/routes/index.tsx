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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdelhady Grünpflege – Grünpflege & Umzüge in Deutschland" },
      {
        name: "description",
        content:
          "Zuverlässige Grünpflege, Gartenarbeit, Umzüge und Transporte in Deutschland. Faire Preise, flexible Termine. Jetzt kostenloses Angebot anfragen.",
      },
      { property: "og:title", content: "Abdelhady Grünpflege – Grünpflege & Umzüge" },
      {
        property: "og:description",
        content: "Ihr zuverlässiger Partner für Grünpflege, Gartenarbeit und Umzüge in Deutschland.",
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
