import { PageTransition } from "@/components/layout/";
import { 
  HeroSection,
  FeaturesSection,
  ServicesSection,
  AboutPreviewSection
 } from "@/components/sections/landing";

const HomePage = async () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

    </PageTransition>
  );
};

export default HomePage;
