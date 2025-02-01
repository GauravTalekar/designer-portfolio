import AboutMe from "@/components/about-me"
import ContactSection from "@/components/contact/contact-section";
import HeroHeader from "@/components/hero-header"
import ProjectGrid from "@/components/project-grid";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <AboutMe />
      <ProjectGrid />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
