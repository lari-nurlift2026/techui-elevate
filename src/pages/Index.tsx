import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import WhyNurliftSection from "@/components/WhyNurliftSection";

import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SolutionsSection />
      <AboutSection />
      <EcosystemSection />
      <WhyNurliftSection />
      <StrategySection />
      <PartnersSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
