import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Precision CNC components for diesel engines and OEM applications, plus hydraulic hose assemblies, end fittings, adapters, ferrules, flange fittings and stainless steel hoses.",
};

export default function ProductsPage() {
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

      {/* PRECISION COMPONENTS — visual banner linking to the full gallery */}
      <section className="section-pad bg-ink py-20">
        <Link
          href="/precision-components"
          className="group grid gap-0 overflow-hidden border border-haze/15 transition-colors hover:border-brass md:grid-cols-[1fr_1.3fr]"
        >
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
            <Image
              src="/images/precision/group-1.png"
              alt="Assortment of CNC-turned precision components"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 bg-plate/40 p-8 sm:p-10">
            <div className="eyebrow">Primary Focus</div>
            <h2 className="font-display text-3xl font-bold text-haze text-balance">
              Precision Components for diesel engines and OEM applications.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-steelLight">
              CNC-turned to drawing tolerance across 16 machines — most of it
              under client confidentiality. See real production photos in the
              full capability gallery.
            </p>
            <span className="mt-2 inline-flex w-fit items-center gap-2 border border-brass px-5 py-2.5 font-mono text-xs uppercase tracking-widest2 text-brass transition-colors group-hover:bg-brass group-hover:text-ink">
              View Capability Gallery <ArrowRight size={14} />
            </span>
          </div>
        </Link>
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
