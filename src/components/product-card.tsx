import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { productStockImages, precisionCardImage } from "@/lib/product-images";

export function ProductCard({ product }: { product: Product }) {
  const isPrecision = product.slug === "precision-components";
  const imgSrc = isPrecision ? precisionCardImage : productStockImages[product.slug];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-steel/15 bg-white transition-colors hover:border-brass"
    >
      {imgSrc && (
        <div className="relative aspect-[4/3] overflow-hidden bg-steel/5">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <span className="plate-number">{product.code}</span>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-steel/40 transition-colors group-hover:text-brass"
            />
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-steel">{product.short}</p>
        </div>
        <div className="mt-6 h-px w-full bg-steel/10 transition-colors group-hover:bg-brass/40" />
      </div>
    </Link>
  );
}
