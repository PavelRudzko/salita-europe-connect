import { Truck } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import europeNetwork from "@/assets/europe-network.jpg";

const NetworkSection = () => {
  const ref = useFadeIn();

  return (
    <section id="network" ref={ref} className="fade-in-section py-32 md:py-44 relative">
      <div className="section-glow top-0 right-0" />

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left text */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-[0.2em]">Our Network</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4 mb-8 text-foreground leading-tight">
              Pan-European<br /><span className="text-gradient">Coverage</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Road freight to and from Italy, Czech Republic, Slovenia, Lithuania, Latvia, Estonia and Turkey.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Truck size={18} className="text-primary" />
                </div>
                <span className="text-secondary-foreground">Road freight across European markets</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -inset-8 glow-blob opacity-50 rounded-3xl" />
            <img
              src={europeNetwork}
              alt="SALITA TRADE European logistics network"
              className="relative rounded-2xl border border-white/[0.06] w-full shadow-2xl shadow-primary/10"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
