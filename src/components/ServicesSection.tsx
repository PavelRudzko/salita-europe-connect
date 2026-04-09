import { Cpu, Truck, Warehouse } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const services = [
  {
    icon: Cpu,
    title: "Electronics Trading",
    desc: "Wholesale sourcing of consumer electronics, components, and accessories from trusted global manufacturers for EU distribution.",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "End-to-end freight management with optimized routes across Europe. FTL, LTL, and express delivery options available.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Modern warehousing facilities in strategic EU locations with inventory management, pick & pack, and fulfillment services.",
  },
];

const ServicesSection = () => {
  const ref = useFadeIn();

  return (
    <section id="services" ref={ref} className="fade-in-section py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">What We Do</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">Our Core Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="glass-card-hover p-8 md:p-10 flex flex-col items-start gap-5">
              <div className="p-3 rounded-lg gradient-primary">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
