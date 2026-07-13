import type { Metadata } from "next";
import {
  Truck, Mountain, Anchor, Factory, Cpu, Wrench, Tractor, HardHat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Murugesan & Co. supplies hydraulic hose assemblies and fittings to earth-moving, mining, oil & gas, manufacturing and heavy-machinery industries.",
};

const industries = [
  { icon: HardHat, name: "Construction Equipment", body: "Hose assemblies and end fittings for excavators, loaders and construction-site machinery." },
  { icon: Truck, name: "Earth Movers", body: "Dumpers, dozers and payloaders running assemblies rated for continuous heavy-duty cycles." },
  { icon: Mountain, name: "Mining", body: "Mining hoses and fittings built for abrasive, high-vibration operating conditions." },
  { icon: Anchor, name: "Oil & Gas", body: "Petroleum transfer, oil suction and discharge hose for upstream and downstream handling." },
  { icon: Factory, name: "Manufacturing", body: "Plastic molders, compressors and general industrial machinery." },
  { icon: Cpu, name: "Industrial Automation", body: "Precision components and fittings for automated production lines." },
  { icon: Wrench, name: "Heavy Machinery", body: "Cranes and special-purpose machinery requiring custom flange and adapter configurations." },
  { icon: Tractor, name: "Agriculture Equipment", body: "Hand primers and hose assemblies for diesel-powered farm machinery." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">Industries Served</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          If it runs on hydraulics, chances are we've fitted it.
        </h1>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="grid gap-px overflow-hidden border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
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
