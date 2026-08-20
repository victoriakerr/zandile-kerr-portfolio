import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { GitHubDashboard } from "@/components/portfolio/GitHubDashboard";
import { Projects } from "@/components/portfolio/Projects";
import { Events } from "@/components/portfolio/Events";
import { Gallery } from "@/components/portfolio/Gallery";
import { Timeline } from "@/components/portfolio/Timeline";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Zandile Kerr — Software Developer & AI Enthusiast";
const description =
  "Portfolio of Zandile Kerr, a South African full-stack software developer, technical mentor and CAPACITI AI Skills Accelerator participant.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Zandile Kerr",
          jobTitle: "Software Developer",
          email: "mailto:vickykerr20@gmail.com",
          telephone: "+27626649400",
          address: { "@type": "PostalAddress", addressCountry: "ZA" },
          sameAs: [
            "https://www.linkedin.com/in/zandile-kerr",
            "https://github.com/victoriakerr",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <GitHubDashboard />
        <Projects />
        <Events />
        <Gallery />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
