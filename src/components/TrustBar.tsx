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
    <section ref={ref} className="fade-in-section relative z-10 -mt-20">
      <div className="container mx-auto px-6">
        <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 p-10 md:p-14">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <m.icon size={24} className="text-primary" />
              </div>
              <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">{m.value}</span>
              <span className="text-sm text-muted-foreground tracking-wide">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
