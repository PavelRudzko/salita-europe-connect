import { MapPin, TrendingUp, Globe } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import europeNetwork from "@/assets/europe-network.jpg";

const NetworkSection = () => {
  const ref = useFadeIn();

  return (
    <section id="network" ref={ref} className="fade-in-section py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Network</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Pan-European <span className="text-gradient">Coverage</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Operating across key European markets with optimized logistics routes and fast delivery times. Our network spans from Scandinavia to the Mediterranean.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, text: "Strategic warehouse locations in Poland & Germany" },
                { icon: TrendingUp, text: "Optimized cross-border supply chains" },
                { icon: Globe, text: "Coverage across 15+ EU member states" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 mt-0.5">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-secondary-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -inset-4 glow-blob opacity-40 rounded-xl" />
            <img
              src={europeNetwork}
              alt="SALITA TRADE European logistics network"
              className="relative rounded-xl border border-border/30 w-full"
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
