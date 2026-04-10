import { MapPin, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.04] py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-5">
              SALITA <span className="text-gradient">TRADE</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wholesale electronics trading, logistics, and warehousing across the European Union.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Electronics Trading</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Logistics</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Warehousing</a></li>
              <li><a href="#network" className="hover:text-foreground transition-colors">EU Network</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-primary mt-1 shrink-0" />
                <span>SALITA TRADE Sp. z o.o.<br />Ul. Goździków 29/31 30A<br />04-231 Warszawa, Poland</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <span>NIP: 5252931226</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SALITA TRADE Sp. z o.o. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
