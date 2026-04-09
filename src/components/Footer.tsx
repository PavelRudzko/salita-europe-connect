import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              SALITA <span className="text-gradient">TRADE</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wholesale electronics trading, logistics, and warehousing solutions across the European Union.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Electronics Trading</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Logistics</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Warehousing</a></li>
              <li><a href="#network" className="hover:text-foreground transition-colors">EU Network</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>SALITA TRADE Sp. z o.o.<br />Ul. Goździków 29/31 30A<br />04-231 Warszawa, Poland</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <span>NIP: 5252931226</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SALITA TRADE Sp. z o.o. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
