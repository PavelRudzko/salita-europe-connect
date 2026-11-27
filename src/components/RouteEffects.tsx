import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { brands } from "@/data/brands";

const titles: Record<string, string> = {
  "/": "SALITA TRADE | Wholesale Electronics & European Logistics",
  "/electronics": "Wholesale Electronics | SALITA TRADE",
  "/electronics/brands": "Brands We Trade | SALITA TRADE",
  "/logistics": "European Logistics | SALITA TRADE",
};

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const brandMatch = pathname.match(/^\/electronics\/brands\/(.+)$/);
    const brand = brandMatch ? brands.find((b) => b.slug === brandMatch[1]) : undefined;
    document.title = titles[pathname] ?? (brand ? `${brand.name} | SALITA TRADE` : "Page Not Found | SALITA TRADE");
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}
