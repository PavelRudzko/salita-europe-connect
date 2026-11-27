import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { brands } from "@/data/brands";

const SITE = "https://salitatrade.pl";

type Meta = { title: string; description: string };

const pages: Record<string, Meta> = {
  "/": {
    title: "SALITA TRADE | Wholesale Electronics & European Logistics",
    description:
      "Wholesale electronics supply and European logistics for business customers: printers, NAS storage, servers and network equipment. Warsaw, Poland.",
  },
  "/electronics": {
    title: "Wholesale Electronics | SALITA TRADE",
    description:
      "Wholesale electronics for business customers: printers and consumables, NAS and storage, servers and network equipment from the brands we trade.",
  },
  "/electronics/brands": {
    title: "Brands We Trade | SALITA TRADE",
    description:
      "Brands we supply wholesale: Canon, HP, Kyocera, Dell, Synology, QNAP, Konica Minolta, Ricoh, OKI, Epson, Zyxel, ASUS and Supermicro.",
  },
  "/logistics": {
    title: "European Logistics | SALITA TRADE",
    description:
      "Road freight and logistics services across Europe: collection and delivery in Italy, Germany, Czech Republic, Slovenia, the Baltics and Turkey.",
  },
};

const notFound: Meta = {
  title: "Page Not Found | SALITA TRADE",
  description: "The requested page was not found.",
};

function brandMeta(slug: string): Meta | undefined {
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return undefined;
  return {
    title: `${brand.name} Wholesale | SALITA TRADE`,
    description: `${brand.category} from ${brand.name}, traded wholesale for business customers. Availability and terms are discussed for each enquiry.`,
  };
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const brandMatch = pathname.match(/^\/electronics\/brands\/(.+)$/);
    const meta = (brandMatch && brandMeta(brandMatch[1])) || pages[pathname] || notFound;
    const url = SITE + pathname;
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setCanonical(url);
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}
