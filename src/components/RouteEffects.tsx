import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "SALITA TRADE | Wholesale Electronics & European Logistics",
  "/electronics": "Wholesale Electronics | SALITA TRADE",
  "/logistics": "European Logistics | SALITA TRADE",
};

export default function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? "Page Not Found | SALITA TRADE";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}