import BusinessPage from "@/components/BusinessPage";

export default function Electronics() {
  return <BusinessPage
    title="Wholesale Electronics"
    description="SALITA TRADE Sp. z o.o. is a Warsaw-based company trading electronics wholesale for business customers."
    eyebrow="B2B only"
    items={["Product or model", "Quantity", "Destination", "Requested delivery date"]}
    note="Availability, price and terms are discussed for each enquiry. Include your product requirements and delivery details in your email."
    quoteLabel="Request an Electronics Quote"
    subject="Electronics wholesale enquiry"
  />;
}