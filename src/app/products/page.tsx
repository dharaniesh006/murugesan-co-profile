import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Hydraulic hose assemblies, end fittings, adapters, ferrules, flange fittings, stainless steel hoses, hand primers, precision components and metal finishing services.",
};

export default function ProductsPage() {
  return (
    <section className="section-pad bg-paper py-24">
      <div className="eyebrow">Full Catalog</div>
      <h1 className="mt-3 max-w-2xl font-display text-5xl font-bold text-ink text-balance">
        Nine product lines, manufactured under one quality system.
      </h1>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-steel">
        Every line below is produced in-house at our Kakkalur Industrial Estate
        facility — open a product for full specifications and to send a
        spec-matched enquiry.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
