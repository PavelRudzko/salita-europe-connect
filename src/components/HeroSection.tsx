import { ArrowRight, FileText } from "lucide-react";
import { Button } from "./ui/button";
import heroMap from "@/assets/europe-map-glow.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroMap} alt="European logistics network" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-blob animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
          Trusted EU Electronics Partner
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 glow-text text-foreground">
          Electronics Supply &<br />
          <span className="text-gradient">Logistics Across Europe</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          SALITA TRADE delivers wholesale electronics, warehousing, and fast transport solutions across EU markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 text-base px-8 py-6 gradient-primary text-primary-foreground font-semibold">
            <FileText size={18} />
            Request Price List
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 border-border/60 text-foreground hover:bg-secondary">
            Get Logistics Quote
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
