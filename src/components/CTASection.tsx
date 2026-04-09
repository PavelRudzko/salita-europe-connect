import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useContactModal } from "@/hooks/useContactModal";

const CTASection = () => {
  const ref = useFadeIn();
  const openContact = useContactModal();

  return (
    <section id="contact" ref={ref} className="fade-in-section py-32 md:py-44 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1000px] h-[500px] glow-blob opacity-40" />
      </div>

      <div className="relative container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
          Work with a Reliable<br />
          <span className="text-gradient">EU Partner</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Competitive pricing on wholesale electronics, logistics, and warehousing. Let's scale together.
        </p>
        <Button onClick={openContact} size="lg" className="gap-2 text-base px-12 py-7 gradient-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all">
          Request a Quote
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
