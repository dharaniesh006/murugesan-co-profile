import type { Metadata } from "next";
import { Cog, Gauge, ClipboardCheck, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description:
    "CNC machining, press-component manufacturing, TIG welding and stage-wise quality control at Murugesan & Co.'s Kakkalur Industrial Estate facility.",
};

const workflow = [
  { step: "01", title: "Raw Material Intake", body: "Mild steel, stainless steel and hose stock verified against specification before release to the floor." },
  { step: "02", title: "Turning & Machining", body: "End fittings and precision components cut on semi-automatic lathes, CNC lathes and thread chasers." },
  { step: "03", title: "Pressing", build: "", body: "Press components formed across our 100-ton presses to drawing tolerance." },
  { step: "04", title: "Welding & Assembly", body: "Fittings secured to hose by TIG (argon) welding, matched to hose type and service condition." },
  { step: "05", title: "Finishing", body: "Zinc, silver, electroless nickel, zincteck or tin plating applied where the application calls for it." },
  { step: "06", title: "Inspection & Dispatch", body: "Stage-wise inspection, random testing and sampling before every assembly leaves the facility." },
];

const machinery = [
  { label: "CNC Lathes", value: "16" },
  { label: "Hydraulic Presses (100 ton)", value: "2" },
  { label: "Welding Process", value: "TIG (Argon)" },
  { label: "Facility", value: "Kakkalur Industrial Estate, Tiruvallur" },
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">Manufacturing Capabilities</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          A shop floor built around one part travelling start to finish.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steelLight">
          Machining, pressing, welding and finishing all happen under one roof
          at our Kakkalur Industrial Estate facility, so tolerances are set
          once and held through to dispatch.
        </p>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Production Workflow</div>
        <div className="mt-10 grid gap-px overflow-hidden border border-steel/15 bg-steel/15 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((w) => (
            <div key={w.step} className="bg-paper p-8">
              <span className="font-mono text-xs text-brass">{w.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="section-pad grid gap-10 md:grid-cols-4">
          {machinery.map((m) => (
            <div key={m.label} className="border border-haze/15 bg-plate/40 p-6">
              <div className="font-display text-2xl font-bold text-haze">{m.value}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-steelLight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-haze py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex gap-4">
            <Cog className="mt-1 shrink-0 text-brass" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Precision Turning</h3>
              <p className="mt-1 text-sm text-steel">CNC and semi-automatic lathes hold tight dimensional tolerance across production runs.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Gauge className="mt-1 shrink-0 text-brass" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Pressure Testing</h3>
              <p className="mt-1 text-sm text-steel">Assemblies checked against rated working pressure before release.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Factory className="mt-1 shrink-0 text-brass" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Press Components</h3>
              <p className="mt-1 text-sm text-steel">Two 100-ton presses forming components to drawing.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <ClipboardCheck className="mt-1 shrink-0 text-brass" size={22} />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Documented QC</h3>
              <p className="mt-1 text-sm text-steel">Every batch logged through our stage-wise inspection system.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
