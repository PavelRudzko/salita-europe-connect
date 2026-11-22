import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          SALITA <span className="text-gradient">TRADE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#network" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Network</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <Button size="sm" asChild>
            <a href="mailto:logistic@salitatrade.pl">Request Quote</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.04] bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          <a href="#services" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Services</a>
          <a href="#network" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Network</a>
          <a href="#contact" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Contact</a>
          <Button size="sm" className="w-fit" asChild>
            <a href="mailto:logistic@salitatrade.pl">Request Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
