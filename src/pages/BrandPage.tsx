import { useParams } from "react-router-dom";
import BusinessPage from "@/components/BusinessPage";
import NotFound from "@/pages/NotFound";
import { brands } from "@/data/brands";

export default function BrandPage() {
  const { slug } = useParams();
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return <NotFound />;
  const article = ["hp", "oki", "epson", "asus"].includes(brand.slug) ? "an" : "a";
  return <BusinessPage
    title={brand.name}
    description={`${brand.category} from ${brand.name}, traded wholesale for business customers.`}
    eyebrow="B2B only"
    items={["Product or model", "Quantity", "Destination", "Requested delivery date"]}
    note="Availability, price and terms are discussed for each enquiry. Include your product requirements and delivery details in your email."
    quoteLabel={`Request ${article} ${brand.name} Quote`}
    subject={`Electronics wholesale enquiry - ${brand.name}`}
    assortment={brand.assortment}
    models={brand.models}
  />;
}
