import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck, Mountain, Anchor, Factory, Cpu, Wrench, Tractor, HardHat,
  Cog, Globe2, ShieldCheck, Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Murugesan & Co. supplies precision-turned components to diesel engine OEMs and general engineering programs, and hydraulic hose assemblies and fittings to earth-moving, mining, oil & gas and heavy-machinery industries.",
};

const precisionIndustries = [
  { icon: Cog, name: "Diesel Engine OEMs", body: "Turned components supplied direct to diesel engine manufacturers, held to drawing tolerance batch after batch." },
  { icon: Building2, name: "OEM Contract Manufacturing", body: "General engineering components produced to customer drawing and specification under confidentiality agreements." },
  { icon: Globe2, name: "Export Programs", body: "Components supplied to industrial customers across India, with a growing share exported to Gulf markets." },
  { icon: ShieldCheck, name: "Internal Assembly Supply", body: "Precision-turned parts feeding our own hydraulic end-fitting and adapter production, keeping tolerance in-house end to end." },
];

const hydraulicIndustries = [
  { icon: HardHat, name: "Construction Equipment", body: "Hose assemblies and end fittings for excavators, loaders and construction-site machinery." },
  { icon: Truck, name: "Earth Movers", body: "Dumpers, dozers and payloaders running assemblies rated for continuous heavy-duty cycles." },
  { icon: Mountain, name: "Mining", body: "Mining hoses and fittings built for abrasive, high-vibration operating conditions." },
  { icon: Anchor, name: "Oil & Gas", body: "Petroleum transfer, oil suction and discharge hose for upstream and downstream handling." },
  { icon: Factory, name: "Manufacturing", body: "Plastic molders, compressors and general industrial machinery." },
  { icon: Cpu, name: "Industrial Automation", body: "Fittings and hose assemblies integrated into automated production lines." },
  { icon: Wrench, name: "Heavy Machinery", body: "Cranes and special-purpose machinery requiring custom flange and adapter configurations." },
  { icon: Tractor, name: "Agriculture Equipment", body: "Hose assemblies and fittings for diesel-powered farm machinery." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">Industries Served</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          Precision components for diesel engine OEMs. Hydraulic fittings for everything that moves.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steelLight">
          Precision-turned components are our primary manufacturing focus
          today, serving diesel engine and OEM programs. Hydraulic hose
          assemblies and fittings remain in full production alongside it,
          supplying the industries below.
        </p>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Primary Focus</div>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink text-balance">
          Precision Components
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-4">
          {precisionIndustries.map((ind) => (
            <div key={ind.name} className="bg-paper p-8">
              <ind.icon className="text-brass" size={24} />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{ind.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/precision-components"
          className="mt-6 inline-block font-mono text-xs tracking-widest2 uppercase text-brass hover:underline"
        >
          View capability gallery →
        </Link>
      </section>

      <section className="section-pad bg-haze py-24">
        <div className="eyebrow">Also in Production</div>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink text-balance">
          Hydraulic Hoses &amp; Fittings
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-4">
          {hydraulicIndustries.map((ind) => (
            <div key={ind.name} className="bg-paper p-8">
              <ind.icon className="text-brass" size={24} />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{ind.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
