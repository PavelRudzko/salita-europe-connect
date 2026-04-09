import { Cpu, Truck, Warehouse } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const services = [
  {
    icon: Cpu,
    title: "Electronics Trading",
    desc: "Wholesale sourcing of consumer electronics and components from trusted global manufacturers.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "End-to-end freight management with optimized routes. FTL, LTL, and express delivery.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Modern EU warehouse facilities with inventory management, pick & pack, and fulfillment.",
  },
];

const ServicesSection = () => {
  const ref = useFadeIn();

  return (
    <section id="services" ref={ref} className="fade-in-section py-32 md:py-44 relative">
      <div className="section-glow top-1/2 left-0 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4 text-foreground">Core Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="glass-card-hover p-10 md:p-12 flex flex-col items-start gap-6">
              <div className="p-4 rounded-2xl gradient-primary shadow-lg shadow-primary/20">
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
