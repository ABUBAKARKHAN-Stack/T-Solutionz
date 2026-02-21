import { PageTransition } from "@/components/layout/";
import {
  HeroSection,
  FeaturesSection,
  ServicesSection,
  AboutPreviewSection,
  ApproachSection,
  CTASection,
  FAQSection,
  PartnersSection,
  CaseStudySection as _,
  TestimonialsSection,
  WhyChooseUsSection,
  BlogSection as __,
  PortfolioSection,
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

      {/* Partners Section  */}
      <PartnersSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Portfolio Section  */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blogs Section  */}
      {/* <BlogSection /> */}

      {/* Case Studies */}
      {/* <CaseStudySection /> */}

      {/* Our Approach */}
      <ApproachSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section  */}
      <CTASection />

    </PageTransition>
  );
};

export default HomePage;
