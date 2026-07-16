import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { products, getProduct } from "@/lib/products";
import { ContactForm } from "@/components/contact-form";
import { productStockImages } from "@/lib/product-images";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview,
    brand: { "@type": "Brand", name: "Murugesan & Co." },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="bg-ink section-pad py-20">
        <nav className="font-mono text-[11px] uppercase tracking-widest2 text-steelLight">
          <Link href="/products" className="hover:text-brass">Products</Link> / {product.name}
        </nav>
        <div className="mt-6 plate-number text-brass">{product.code}</div>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold text-haze text-balance">
          {product.name}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-steelLight">
          {product.overview}
        </p>
      </section>

      <section className="section-pad grid gap-14 bg-paper py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="eyebrow">Applications</div>
          <ul className="mt-5 space-y-3">
            {product.applications.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed text-steel">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brass" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Technical Specifications</div>
          <dl className="mt-5 divide-y divide-steel/15 border-y border-steel/15">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-steel">{s.label}</dt>
                <dd className="text-right font-medium text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-haze py-20">
        <div className="eyebrow">Product Gallery</div>
        {product.slug === "precision-components" ? (
          <>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["part-1", "part-3", "part-5", "part-7"].map((p) => (
                <div key={p} className="relative aspect-square overflow-hidden border border-steel/15">
                  <Image
                    src={`/images/precision/${p}.png`}
                    alt="CNC-turned precision component"
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 font-mono text-[11px] text-steel/60">
              Real production components — part identities and client details withheld under confidentiality.
              See the full{" "}
              <Link href="/precision-components" className="text-brass hover:underline">
                capability gallery
              </Link>
              .
            </p>
          </>
        ) : (
          <>
            <div className="mt-6 relative aspect-[16/9] max-w-3xl overflow-hidden border border-steel/15">
              <Image
                src={productStockImages[product.slug]}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-steel/60">
              Image shown is illustrative stock photography, not our shipped product.
            </p>
          </>
        )}
      </section>

      <section id="enquire" className="section-pad bg-paper py-24">
        <div className="mx-auto max-w-2xl">
          <div className="eyebrow">Enquire</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">
            Request a quote for {product.name}
          </h2>
          <div className="mt-8">
            <ContactForm defaultProduct={product.name} />
          </div>
        </div>
      </section>
    </>
  );
}
