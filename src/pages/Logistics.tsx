import BusinessPage from "@/components/BusinessPage";

export default function Logistics() {
  return <BusinessPage
    showNetwork
    title="European Logistics"
    description="SALITA TRADE Sp. z o.o. provides road freight and logistics services across Europe."
    eyebrow="European road freight"
    items={["Collection and delivery locations", "Cargo description", "Weight and dimensions", "Quantity or number of pallets", "Preferred dates"]}
    note="Share the details of your transport enquiry so we can discuss your requirements and terms."
    quoteLabel="Request a Logistics Quote"
    subject="European logistics enquiry"
  />;
}
