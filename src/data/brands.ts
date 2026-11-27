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
  {
    slug: "canon",
    name: "Canon",
    category: "Printers and multifunction devices (MFPs)",
    assortment: "Printers, ink and toner cartridges, and image drums.",
    models: [
      "i-SENSYS MF237w laser printer",
      "C-EXV54 toner (black, cyan, magenta, yellow)",
      "PFI-102 ink cartridge (black, cyan, magenta)",
      "PFI-1100 ink cartridge (magenta)",
      "CLI-471M ink cartridge (magenta)",
      "CL-41 ink cartridge (colour)",
      "C-EXV14 image drum (black)",
      "C-EXV21 image drum (black)",
      "C-EXV53/28 image drum (black)",
    ],
  },
  {
    slug: "hp",
    name: "HP",
    category: "Printers and multifunction devices (MFPs)",
    assortment: "Ink cartridges for HP printers.",
    models: [
      "HP 711 ink cartridge (cyan, tri-pack)",
    ],
  },
  {
    slug: "kyocera",
    name: "Kyocera",
    category: "Printers and multifunction devices (MFPs)",
    assortment: "Laser printers and multifunction devices: ECOSYS P, PA, M, MA and MZ series and TASKalfa, plus document processors, paper feeders and other accessories.",
    models: [
      "TASKalfa 5004i (A3 laser MFP)",
      "TASKalfa 2554ci (A3 colour laser MFP)",
      "TASKalfa MZ2501ci (colour laser MFP)",
      "ECOSYS MZ3201ix",
      "ECOSYS M8130cidn (A3 colour laser MFP)",
      "ECOSYS M8124cidn (MFP)",
      "ECOSYS M4132idn (MFP)",
      "ECOSYS M5526cdn (MFP)",
      "ECOSYS M2735dw (laser MFP)",
      "ECOSYS MA5500ifx (laser MFP)",
      "ECOSYS MA4000cix (MFP)",
      "ECOSYS MA2600cfx (MFP)",
      "ECOSYS PA6000x (A4 mono laser printer)",
      "ECOSYS PA4500cx (A4 colour laser printer)",
      "ECOSYS P5026cdn (A4 colour laser printer)",
      "ECOSYS P2235dn (A4 mono laser printer)",
    ],
  },
  { slug: "dell", name: "Dell", category: "Monitors and laptops" },
  { slug: "synology", name: "Synology", category: "Network solutions" },
  { slug: "qnap", name: "QNAP", category: "Network solutions" },
  {
    slug: "konica-minolta",
    name: "Konica Minolta",
    category: "Cartridges, toners and components",
    assortment: "Toners, developers, drums and spare parts (rollers, gears, cleaning blades, fusing belts) for Konica Minolta devices.",
    models: [
      "TN-627 toner (black, cyan, magenta, yellow)",
      "TN-622 toner (black, cyan, magenta, yellow)",
      "TN-633 toner (black, cyan, yellow)",
      "TN-017 toner (black)",
      "DV-011 developer (black)",
      "DV-313 developer (black)",
      "DV-512 developer (black)",
      "DR-012 drum",
      "DR-017 drum",
      "DU-106 drum",
    ],
  },
  {
    slug: "ricoh",
    name: "Ricoh",
    category: "Cartridges, toners and components",
    assortment: "Spare parts for Ricoh devices: fuser and pressure rollers, paper feed, pickup and separation rollers, gears and bearings.",
    models: [
      "AE01-0115 upper fuser roller",
      "AE01-0127 hot roller",
      "AE02-0243 pressure roller",
      "AE04-5059 web sub assembly",
      "AF03-0171 pickup roller",
      "AF03-2102 separation roller",
      "AF03-2171 bypass separation roller",
      "AB01-1591 reverse gear",
      "AB03-0881 torque limiter",
      "AA08-3015 roller clutch",
    ],
  },
  { slug: "oki", name: "OKI", category: "Cartridges, toners and components" },
];
