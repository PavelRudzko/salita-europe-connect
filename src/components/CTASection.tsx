import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const CTASection = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" ref={ref} className="fade-in-section py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] glow-blob opacity-30" />
      </div>

      <div className="relative container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Work with a Reliable<br />
          <span className="text-gradient">EU Partner</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Get competitive pricing on wholesale electronics, logistics, and warehousing. Let's build a partnership that scales.
        </p>
        <Button size="lg" className="gap-2 text-base px-10 py-6 gradient-primary text-primary-foreground font-semibold">
          Request a Quote
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
