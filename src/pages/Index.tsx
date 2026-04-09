import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import NetworkSection from "@/components/NetworkSection";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/hooks/useContactModal";

const Index = () => {
  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <NetworkSection />
        <CaseStudies />
        <CTASection />
        <Footer />
      </div>
    </ContactModalProvider>
  );
};

export default Index;
