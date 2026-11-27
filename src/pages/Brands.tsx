import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brands } from "@/data/brands";
import heroMap from "@/assets/europe-map-glow.jpg";

export default function Brands() {
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
            <p className="text-primary text-sm font-medium uppercase mb-6">Wholesale electronics</p>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold leading-tight glow-text mb-8 text-foreground">Brands we trade</h1>
            <p className="text-lg md:text-xl text-slate-300 [text-shadow:0_2px_8px_rgb(0_0_0_/_0.9)] max-w-2xl mx-auto leading-relaxed">We supply business customers with products from these brands. Availability and terms are discussed for each enquiry.</p>
          </div>
        </section>
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <Link key={brand.slug} to={`/electronics/brands/${brand.slug}`} className="group rounded-xl border border-border bg-card p-8 hover:border-primary transition-colors">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{brand.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">{brand.category}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary">View brand <ArrowRight size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
