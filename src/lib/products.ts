export type Product = {
  slug: string;
  code: string; // spec-plate style reference code
  name: string;
  short: string;
  overview: string;
  applications: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "hydraulic-hose-assemblies",
    code: "HA-100",
    name: "Hydraulic Hose Assemblies",
    short: "Assembled to 10,000 PSI, ID 3/16\" to 5\", spiral & braided construction.",
    overview:
      "Complete hose assemblies built in-house from raw hose to crimped, tested end fitting. We assemble to working pressures up to 10,000 PSI across spiral and braided constructions, covering every major international spec so assemblies drop straight into OEM and aftermarket equipment without rework.",
    applications: [
      "Earth-moving machinery — payloaders, excavators, dozers",
      "Mining and quarry equipment",
      "Cranes and heavy lifting gear",
      "Dumpers, drills and multi-utility vehicles",
      "Petroleum transfer, oil suction & discharge, grease lines",
    ],
    specs: [
      { label: "ID Range", value: "3/16\" – 5\"" },
      { label: "Construction", value: "Spiral & Braided" },
      { label: "Max Working Pressure", value: "10,000 PSI" },
      { label: "Standards", value: "SAE, DIN, BS, IS, EN, ISO" },
    ],
  },
  {
    slug: "hydraulic-hose-end-fittings",
    code: "EF-200",
    name: "Hydraulic Hose End Fittings",
    short: "Precision-turned end fittings in MS and SS, argon-welded to hose type.",
    overview:
      "End fittings machined on semi-automatic lathes, CNC lathes and thread chasers, then secured to stainless steel hose by TIG (argon) welding matched to hose type and service condition. Produced in mild steel, stainless steel, or client-specified material, in threaded and flange formats.",
    applications: [
      "Hydraulic hose assembly manufacturing",
      "Flange and threaded pipe connections",
      "Custom fitting requirements for OEM equipment",
    ],
    specs: [
      { label: "Materials", value: "Mild Steel, Stainless Steel, custom" },
      { label: "Threaded Types", value: "BSP, BSPT, NPT, NPTF, METRIC, JIC" },
      { label: "Flange Standards", value: "BS, ASA, DIN" },
      { label: "Joining Method", value: "TIG (argon) welding" },
    ],
  },
  {
    slug: "hydraulic-adapters",
    code: "AD-300",
    name: "Hydraulic Adapters",
    short: "Elbow, straight and special adapters engineered to flange and thread standard.",
    overview:
      "Adapters connecting dissimilar thread and flange standards across hydraulic circuits — including elbow adaptors, straight adaptors and special-purpose fittings built to BS, SAE and DIN references, with interlock variants for high-vibration service.",
    applications: [
      "Cross-standard hydraulic circuit connections",
      "High-vibration mobile equipment",
      "Water blast and pressure-wash systems",
    ],
    specs: [
      { label: "Standards", value: "BS, SAE, DIN — 4SP/4SH & Interlock" },
      { label: "Types", value: "Elbow, Straight, Special Fittings" },
    ],
  },
  {
    slug: "ferrules",
    code: "FR-400",
    name: "Ferrules",
    short: "Crimp ferrules matched to hose construction for a leak-free swage.",
    overview:
      "Ferrules sized and profiled to specific hose constructions to deliver a consistent, leak-free crimp across the working pressure range, produced under the same stage-wise inspection system applied to every fitting we manufacture.",
    applications: [
      "Crimped hose assembly production",
      "Field and OEM assembly lines",
    ],
    specs: [
      { label: "Compatibility", value: "Matched to spiral & braided hose ranges" },
      { label: "Process", value: "Stage-wise dimensional inspection" },
    ],
  },
  {
    slug: "flange-fittings",
    code: "FL-500",
    name: "Flange Fittings",
    short: "BS, SAE and DIN flange fittings, standard and 4SP/4SH interlock.",
    overview:
      "Flange fittings manufactured to BS, SAE and DIN standards including 4SP/4SH high-pressure variants and interlock designs, for bolted connections on high-pressure hydraulic circuits.",
    applications: [
      "High-pressure hydraulic manifolds",
      "Heavy machinery flange connections",
    ],
    specs: [
      { label: "Standards", value: "BS, SAE, DIN, 4SP/4SH, Interlock" },
    ],
  },
  {
    slug: "stainless-steel-hoses",
    code: "SS-600",
    name: "Stainless Steel Hoses",
    short: "SS 321 / 316 / 316L / 304 grades, braided, custom length.",
    overview:
      "Stainless steel hydraulic hoses in AISI 321, 316, 316L and 304 grades, manufactured to client-specified lengths with flanged or threaded end fittings. SS-braided construction adds external damage resistance and increases pressure rating.",
    applications: [
      "Water suction and delivery lines",
      "Steam, welding and petrol dispensing hose",
      "Chemical, sand-blasting and rock-drill hose",
      "Oil suction and discharge, carbon-free service",
    ],
    specs: [
      { label: "Grades", value: "AISI 321, 316, 316L, 304" },
      { label: "Construction", value: "SS Braided" },
      { label: "End Types", value: "Flanged / Threaded, custom length" },
    ],
  },
  {
    slug: "hand-primers",
    code: "HP-700",
    name: "Hand Primers",
    short: "Feed-pump primers for manual fuel transfer when the engine is at rest.",
    overview:
      "Hand primers screwed into the feed pump above the suction valve, used to draw fuel from tank to injection pump while the engine is at rest. Held in stock in warehouse quantities for fast turnaround, and available in customized sizes.",
    applications: [
      "Diesel engine fuel systems",
      "Off-road and stationary engine service",
    ],
    specs: [
      { label: "Fitment", value: "Above suction valve, feed pump" },
      { label: "Availability", value: "Ex-stock and custom sizes" },
    ],
  },
  {
    slug: "precision-components",
    code: "PC-800",
    name: "Precision Components",
    short: "Turned components held to tight tolerance across 10 CNC machines.",
    overview:
      "Precision-turned components produced across our CNC lathe fleet to tight dimensional tolerance, supporting hydraulic assembly production and direct OEM component supply.",
    applications: [
      "OEM component supply",
      "Hydraulic fitting sub-assemblies",
    ],
    specs: [
      { label: "Machinery", value: "10 × CNC Lathes" },
      { label: "Inspection", value: "Stage-wise, random sampling" },
    ],
  },
  {
    slug: "metal-finishing",
    code: "MF-900",
    name: "Metal Finishing Services",
    short: "Zinc, silver, electroless nickel, zincteck and tin plating.",
    overview:
      "Full product-finishing service combining in-house plating lines with strategic partner alliances — zinc, silver, electroless nickel, zincteck and tin plating — for corrosion resistance, conductivity or appearance as the application demands.",
    applications: [
      "Corrosion protection for fittings and press components",
      "Surface preparation for painted or coated assemblies",
    ],
    specs: [
      { label: "Processes", value: "Zinc, Silver, Electroless Nickel, Zincteck, Tin" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
