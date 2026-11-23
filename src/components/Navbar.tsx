import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { quoteHref } from "@/lib/company";

const links = [
  { to: "/", label: "Home" },
  { to: "/electronics", label: "Wholesale Electronics" },
  { to: "/logistics", label: "European Logistics" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 gap-4">
        <Link to="/" onClick={() => setOpen(false)} className="font-heading text-xl font-bold tracking-tight text-foreground shrink-0">SALITA <span className="text-gradient">TRADE</span></Link>
        <div className="hidden lg:flex items-center gap-6">
          {links.map(link => <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>)}
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          <Button size="sm" asChild><a href={quoteHref()}>Request Quote</a></Button>
        </div>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="lg:hidden text-foreground min-h-11 min-w-11 flex items-center justify-center" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <div id="mobile-navigation" className="lg:hidden border-t border-white/[0.04] bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
        {links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground min-h-11 flex items-center">{link.label}</Link>)}
        <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-muted-foreground min-h-11 flex items-center">Contact</a>
        <Button size="sm" className="w-fit" asChild><a href={quoteHref()} onClick={() => setOpen(false)}>Request Quote</a></Button>
      </div>}
    </nav>
  );
};
export default Navbar;
