export const company = {
  name: "SALITA TRADE Sp. z o.o.",
  phone: "+48 536 470 040",
  phoneHref: "tel:+48536470040",
  email: "logistic@salitatrade.pl",
  address: "ul. Goździków 29/31 lok. 30A",
  city: "04-231 Warszawa, Poland",
  nip: "5252931226",
  krs: "0001002258",
  regon: "523666547",
};

export const quoteHref = (subject?: string) =>
  `mailto:${company.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;