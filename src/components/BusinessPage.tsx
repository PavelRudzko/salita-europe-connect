import { ArrowRight, Phone, Check } from "lucide-react";
import NetworkSection from "@/components/NetworkSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { company, quoteHref } from "@/lib/company";
import heroMap from "@/assets/europe-map-glow.jpg";

type Props = {
  title: string;
  description: string;
  eyebrow: string;
  items: string[];
  note: string;
  quoteLabel: string;
  subject: string;
  showNetwork?: boolean;
};

export default function BusinessPage({ title, description, eyebrow, items, note, quoteLabel, subject, showNetwork = false }: Props) {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
          <div className="absolute inset-0" aria-hidden="true">
            <img src={heroMap} alt="" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
          </div>
          <div className="relative container mx-auto px-6 text-center max-w-5xl">
            <p className="text-primary text-sm font-medium uppercase mb-6">{eyebrow}</p>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold leading-tight glow-text mb-8 text-foreground">{title}</h1>
            <p className="text-lg md:text-xl text-slate-300 [text-shadow:0_2px_8px_rgb(0_0_0_/_0.9)] max-w-2xl mx-auto leading-relaxed">{description}</p>
          </div>
        </section>
        {showNetwork && <NetworkSection />}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <p className="text-primary text-sm font-medium uppercase mb-4">Your enquiry</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Let’s discuss your requirements</h2>
                <p className="text-muted-foreground leading-relaxed">{note}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-6">Information to include in your enquiry</h3>
                <ul className="space-y-5">
                  {items.map((item) => <li key={item} className="flex gap-3 text-secondary-foreground"><Check size={18} className="text-primary shrink-0 mt-1" /><span>{item}</span></li>)}
                </ul>
              </div>
            </div>
            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button asChild size="lg" className="gradient-primary h-auto min-h-14 py-4 px-5 whitespace-normal text-left font-semibold">
                <a href={quoteHref(subject)}>{quoteLabel}<ArrowRight size={18} /></a>
              </Button>
              <Button asChild variant="link" className="p-0 text-secondary-foreground">
                <a href={company.phoneHref}><Phone size={18} />{company.phone}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
