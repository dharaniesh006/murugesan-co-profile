import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Stage-wise inspection, random testing and sampling at Murugesan & Co. — the quality control system behind every hydraulic fitting we ship.",
};

const checks = [
  { title: "Incoming Material Check", body: "Steel grade and hose stock verified against mill certificates before it's released to the floor." },
  { title: "In-Process Inspection", body: "Dimensions and weld quality checked at each stage of turning, pressing and welding — not only at the end." },
  { title: "Random Sampling", body: "Batches sampled at random for pressure and leak testing, catching drift before it reaches a full run." },
  { title: "Leak & Pressure Verification", body: "Assemblies checked to avoid leakage or pressure drop from any fault before they leave the facility." },
  { title: "Final Dispatch Audit", body: "A last check against the customer's original specification before packing and dispatch." },
];

export default function QualityPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">Quality Assurance</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          Quality checked at every stage, not just at the door.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steelLight">
          Customer satisfaction has always been the primary objective of the
          company; every product passes through an extensive quality check
          system before it's cleared for delivery.
        </p>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="space-y-0 divide-y divide-steel/15 border-y border-steel/15">
          {checks.map((c, i) => (
            <div key={c.title} className="grid gap-4 py-8 md:grid-cols-[80px_1fr]">
              <span className="font-mono text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-haze py-24">
        <div className="eyebrow">Certifications</div>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink">Placeholder for certification marks</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {["ISO 9001", "CE", "Export License"].map((c) => (
            <div
              key={c}
              className="flex h-20 w-40 items-center justify-center border border-steel/20 bg-paper font-mono text-xs uppercase tracking-widest2 text-steel/50"
            >
              {c}
            </div>
          ))}
        </div>
        <p className="mt-3 max-w-lg font-mono text-[11px] text-steel/60">
          Replace with scanned certification documents once available.
        </p>
      </section>
    </>
  );
}
