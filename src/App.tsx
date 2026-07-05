import { IntroLoader } from "@/components/site/IntroLoader";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Menu } from "@/components/site/Menu";
import { Experience } from "@/components/site/Experience";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Visit } from "@/components/site/Visit";
import { FooterCta } from "@/components/site/FooterCta";

export default function App() {
  return (
    <>
      <IntroLoader />
      <ScrollProgress />
      <main className="relative bg-[var(--color-cream)] text-[var(--color-espresso)]">
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <Hero />
        <Story />
        <Menu />
        <Experience />
        <Reviews />
        <Gallery />
        <Visit />
        <FooterCta />
      </main>
    </>
  );
}
