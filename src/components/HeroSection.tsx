import { ArrowRight, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useContactModal } from "@/hooks/useContactModal";
import heroMap from "@/assets/europe-map-glow.jpg";

const HeroSection = () => {
  const openContact = useContactModal();

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMap} alt="European logistics network" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] glow-blob animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] glow-blob opacity-40 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-24">
        <div className="inline-block mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm">
          ✦ Trusted EU Electronics Partner
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] mb-8 glow-text text-foreground tracking-tight">
          Electronics Supply &<br />
          <span className="text-gradient">Logistics Across Europe</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          Wholesale electronics, warehousing, and fast transport solutions across EU markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={openContact} size="lg" className="gap-2 text-base px-10 py-7 gradient-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
            <FileText size={18} />
            Request Price List
          </Button>
          <Button onClick={openContact} size="lg" variant="outline" className="gap-2 text-base px-10 py-7 border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.06] hover:border-white/20 backdrop-blur-sm transition-all">
            Get Logistics Quote
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
