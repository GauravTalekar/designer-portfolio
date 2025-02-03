import AboutMe from "@/components/about-me"
import ContactSection from "@/components/contact/contact-section";
import FadeInObserver from "@/components/fade-in-observer";
import HeroHeader from "@/components/hero-header"
import MasonryGridSection from "@/components/masonry-grid";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <>
      <FadeInObserver />
      <HeroHeader />
      <AboutMe />
      <MasonryGridSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
