import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Stage-wise inspection, random testing and sampling at Murugesan & Co. — the quality control system behind every hydraulic fitting we ship.",
};

const inspectionPhotos = [
  { src: "/images/quality/profile-projector-1.png", alt: "Profile projector dimensional check", caption: "Profile projector — dimensional verification" },
  { src: "/images/quality/profile-projector-2.png", alt: "Profile projector in use", caption: "Profile projector — profile & tolerance check" },
  { src: "/images/quality/inspection-1.png", alt: "Inspection table with measuring instruments", caption: "Inspection station — micrometers & dial gauges" },
  { src: "/images/quality/inspection-2.png", alt: "Inspection table, quality check", caption: "Dimensional inspection in progress" },
  { src: "/images/quality/inspection-3.png", alt: "Inspection table with component checking", caption: "Component checked against drawing tolerance" },
];

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

      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Inspection Equipment</div>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink text-balance">
          Measured against drawing tolerance, not eyeballed.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inspectionPhotos.map((p) => (
            <figure key={p.src} className="group overflow-hidden border border-steel/15 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-steel/10 bg-haze px-4 py-3 font-mono text-[11px] uppercase tracking-widest2 text-steel">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-pad bg-haze py-24">
        <div className="eyebrow">Certifications</div>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink text-balance">
          ISO 9001:2015 Certified Quality Management System.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="overflow-hidden border border-steel/20 bg-white">
            <div className="relative aspect-[1653/2339] overflow-hidden">
              <Image
                src="/images/certifications/iso-9001-2024-2027.png"
                alt="Murugesan & Co. ISO 9001:2015 Certificate of Registration, issued by KVQA Certification Services"
                fill
                sizes="(min-width: 1024px) 280px, 60vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <dl className="divide-y divide-steel/15 border-y border-steel/15">
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-steel">Standard</dt>
                <dd className="text-right font-medium text-ink">ISO 9001:2015</dd>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-steel">Certificate No.</dt>
                <dd className="text-right font-medium text-ink">KDACQ202412125</dd>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-steel">Issued By</dt>
                <dd className="text-right font-medium text-ink">KVQA Certification Services Pvt. Ltd.</dd>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-steel">Scope</dt>
                <dd className="max-w-xs text-right font-medium text-ink">
                  Manufacture and supply of precision machined components, cold forged components, SS fasteners &amp; components and assembled parts with testing assurance
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-steel">Valid Until</dt>
                <dd className="text-right font-medium text-ink">27 December 2027</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
