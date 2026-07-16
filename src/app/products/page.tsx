import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const precisionExtraPhotos = [
  { src: "/images/precision/part-3.png", alt: "CNC-turned shaft component" },
  { src: "/images/precision/part-5.png", alt: "CNC-machined fitting component" },
  { src: "/images/precision/part-9.png", alt: "CNC-turned threaded component" },
];

export const metadata: Metadata = {
  title: "Products",
  description:
    "Precision CNC components for diesel engines and OEM applications, plus hydraulic hose assemblies, end fittings, adapters, ferrules, flange fittings, stainless steel hoses and metal finishing services.",
};

export default function ProductsPage() {
  const precision = products.filter((p) => p.slug === "precision-components");
  const hydraulic = products.filter((p) => p.slug !== "precision-components");

  return (
    <>
      <section className="section-pad bg-paper py-24">
        <div className="eyebrow">Full Catalog</div>
        <h1 className="mt-3 max-w-2xl font-display text-5xl font-bold text-ink text-balance">
          Two lines of work, one quality system.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-steel">
          Precision components for diesel engines and OEM contracts are our
          primary focus today. Hydraulic hose assemblies and fittings remain
          in production alongside it — both manufactured in-house at our
          Kakkalur Industrial Estate facility.
        </p>
      </section>

      {/* PRECISION COMPONENTS */}
      <section className="section-pad bg-ink py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Primary Focus</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-haze">Precision Components</h2>
          </div>
          <Link
            href="/precision-components"
            className="font-mono text-xs tracking-widest2 uppercase text-brass hover:underline"
          >
            View capability gallery →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {precision.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          {precisionExtraPhotos.map((photo) => (
            <Link
              key={photo.src}
              href="/precision-components"
              className="group relative aspect-[4/3] overflow-hidden border border-haze/15"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
          <Link
            href="/precision-components"
            className="group flex flex-col items-start justify-center gap-3 border border-dashed border-haze/25 p-7 transition-colors hover:border-brass"
          >
            <span className="font-display text-lg font-semibold text-haze">
              See the full capability gallery
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest2 text-brass">
              12 production photos <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* HYDRAULIC PRODUCTS */}
      <section className="section-pad bg-haze py-20">
        <div className="eyebrow">Also in Production</div>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink">
          Hydraulic Hoses &amp; Fittings
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hydraulic.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="mt-6 max-w-xl font-mono text-[11px] text-steel/50">
          Images shown are illustrative stock photography, not our shipped product.
        </p>
      </section>

      <section className="section-pad bg-paper py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink text-balance">
          Have a drawing or a spec sheet? Send it to us directly.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="primary">
            <Link href="/contact">
              Talk to Our Team <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
