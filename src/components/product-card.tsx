import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductIcon } from "@/components/product-icon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col justify-between border border-steel/15 bg-white p-7 transition-colors hover:border-brass"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="w-16 shrink-0">
            <ProductIcon slug={product.slug} size="sm" />
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 text-steel/40 transition-colors group-hover:text-brass"
          />
        </div>
        <span className="plate-number mt-4 block">{product.code}</span>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">{product.short}</p>
      </div>
      <div className="mt-6 h-px w-full bg-steel/10 transition-colors group-hover:bg-brass/40" />
    </Link>
  );
}
