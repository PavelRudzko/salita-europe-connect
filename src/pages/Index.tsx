import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import NetworkSection from "@/components/NetworkSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <NetworkSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
