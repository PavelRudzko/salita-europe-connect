export type Brand = {
  slug: string;
  name: string;
  category: string;
  // Optional: fill in when confirmed. The brand page shows these blocks only
  // when data is present - nothing renders while they are empty.
  assortment?: string;
  models?: string[];
};

export const brands: Brand[] = [
  { slug: "canon", name: "Canon", category: "Printers and multifunction devices (MFPs)" },
  { slug: "hp", name: "HP", category: "Printers and multifunction devices (MFPs)" },
  { slug: "kyocera", name: "Kyocera", category: "Printers and multifunction devices (MFPs)" },
  { slug: "dell", name: "Dell", category: "Monitors and laptops" },
  { slug: "synology", name: "Synology", category: "Network solutions" },
  { slug: "qnap", name: "QNAP", category: "Network solutions" },
  { slug: "konica-minolta", name: "Konica Minolta", category: "Cartridges, toners and components" },
  { slug: "ricoh", name: "Ricoh", category: "Cartridges, toners and components" },
  { slug: "oki", name: "OKI", category: "Cartridges, toners and components" },
];
