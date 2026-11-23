import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "SALITA TRADE | Wholesale Electronics & European Logistics",
  "/electronics": "Wholesale Electronics | SALITA TRADE",
  "/logistics": "European Logistics | SALITA TRADE",
};

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? "Page Not Found | SALITA TRADE";
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}
