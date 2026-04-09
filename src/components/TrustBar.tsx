import { Package, Warehouse, Truck, ShieldCheck } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const metrics = [
  { icon: Package, value: "10,000+", label: "Products" },
  { icon: Warehouse, value: "EU", label: "Warehouses" },
  { icon: Truck, value: "24–72h", label: "Delivery" },
  { icon: ShieldCheck, value: "VAT & EORI", label: "Compliant" },
];

const TrustBar = () => {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="fade-in-section relative z-10 -mt-16">
      <div className="container mx-auto px-6">
        <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 md:p-10">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center gap-2">
              <m.icon size={28} className="text-primary mb-1" />
              <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">{m.value}</span>
              <span className="text-sm text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
