import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Precision Components — CNC Machining",
  description:
    "CNC-turned precision components for diesel engines and OEM applications, manufactured to drawing tolerance at Murugesan & Co.'s Kakkalur Industrial Estate facility.",
};

const componentPhotos = [
  { src: "/images/precision/part-1.png", caption: "CNC-turned precision component — diesel engine spare part" },
  { src: "/images/precision/part-2.png", caption: "Precision-machined component, steel" },
  { src: "/images/precision/part-3.png", caption: "CNC-turned shaft component" },
  { src: "/images/precision/part-4.png", caption: "Precision component — diesel engine application" },
  { src: "/images/precision/part-5.png", caption: "CNC-machined fitting component" },
  { src: "/images/precision/part-6.png", caption: "Precision-turned component, steel" },
  { src: "/images/precision/part-7.png", caption: "CNC-turned diesel engine spare part" },
  { src: "/images/precision/part-8.png", caption: "Precision-machined component" },
  { src: "/images/precision/part-9.png", caption: "CNC-turned threaded component" },
  { src: "/images/precision/part-10.png", caption: "Precision component, steel — diesel engine application" },
  { src: "/images/precision/group-1.png", caption: "A sample of components produced in-house" },
  { src: "/images/precision/group-2.png", caption: "CNC-turned components — mixed batch" },
];

export default function PrecisionComponentsPage() {
  return (
    <>
      <section className="bg-ink section-pad py-24">
        <div className="eyebrow">Precision Components</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          High-precision CNC components, mostly built to someone else's drawing.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steelLight">
          Diesel engine spare parts and precision-turned components are now
          our primary manufacturing focus — produced across 16 CNC machines
          at our Kakkalur Industrial Estate facility. Most of this work is
          OEM-contracted under client confidentiality, so components below
          are shown by process and material only.
        </p>
      </section>

      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Capability Gallery</div>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink text-balance">
          Turned, threaded, drilled — to drawing tolerance.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {componentPhotos.map((p) => (
            <figure key={p.src} className="group overflow-hidden border border-steel/15 bg-white">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-steel/10 bg-haze px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest2 text-steel">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-pad bg-haze py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl font-bold text-ink">16</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-steel">CNC Machines</div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold text-ink">±0.02mm</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-steel">Typical Tolerance</div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold text-ink">OEM</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-steel">Contract Manufacturing</div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-ink text-balance">
          Have a drawing? Send your specification and tolerance requirement.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="primary">
            <Link href="/contact">
              Discuss Your Component <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
