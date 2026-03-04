import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyNurliftSection from "@/components/WhyNurliftSection";
import StrategySection from "@/components/StrategySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <WhyNurliftSection />
      <StrategySection />
      <FooterSection />
    </div>
  );
};

export default Index;
