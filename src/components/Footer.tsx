import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/[0.04] py-20 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-5">
              SALITA <span className="text-gradient">TRADE</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wholesale electronics trading and logistics across Europe.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/electronics" className="hover:text-foreground transition-colors">Wholesale Electronics</Link></li>
              <li><Link to="/logistics" className="hover:text-foreground transition-colors">European Logistics</Link></li>
              <li><Link to="/#network" className="hover:text-foreground transition-colors">EU Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-primary mt-1 shrink-0" />
                <span>SALITA TRADE Sp. z o.o.<br />ul. Goździków 29/31 lok. 30A<br />04-231 Warszawa, Poland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+48536470040" className="hover:text-foreground transition-colors">+48 536 470 040</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:logistic@salitatrade.pl" className="hover:text-foreground transition-colors">logistic@salitatrade.pl</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <span>NIP: 5252931226 · KRS: 0001002258 · REGON: 523666547</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] text-center text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} SALITA TRADE Sp. z o.o. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
