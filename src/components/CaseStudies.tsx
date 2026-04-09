import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const cases = [
  {
    icon: Clock,
    tag: "Delivery",
    title: "Germany → Poland",
    subtitle: "48h Express Delivery",
    desc: "Full container of consumer electronics delivered from Hamburg warehouse to retail chain in Warsaw within 48 hours, including customs clearance.",
  },
  {
    icon: TrendingUp,
    tag: "Sourcing",
    title: "EU Wholesale Sourcing",
    subtitle: "Multi-Market Supply",
    desc: "Consolidated sourcing from 5 EU markets for a wholesale electronics distributor, reducing procurement costs by 22% through optimized logistics.",
  },
];

const CaseStudies = () => {
  const ref = useFadeIn();

  return (
    <section id="cases" ref={ref} className="fade-in-section py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Results</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-foreground">Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {cases.map((c) => (
            <div key={c.title} className="glass-card-hover p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md gradient-primary">
                  <c.icon size={18} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{c.tag}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-accent font-medium">{c.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
