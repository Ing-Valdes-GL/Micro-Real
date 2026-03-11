import Link from "next/link";
import type { Product } from "@/types/database";

function formatPrice(price: number, salePrice: number | null) {
  const value = salePrice ?? price;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

export function ProductCard({ product }: { product: Product }) {
  const hasVariants = false; // Could come from product.has_variants or variant count
  const imageUrl =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : "/placeholder-product.svg";

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:border-mrs-gold/30">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden">
        {product.on_sale && (
          <span className="absolute left-2 top-2 z-10 rounded bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
            SALE
          </span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-white">
          <Link href={`/product/${product.slug}`} className="hover:text-mrs-gold">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-lg font-medium text-mrs-gold">
          {formatPrice(product.price, product.sale_price)}
        </p>
        <Link
          href={hasVariants ? `/product/${product.slug}` : `/shop?add=${product.id}`}
          className="mt-4 inline-block w-full rounded border border-mrs-gold/50 bg-transparent py-2 text-center text-sm font-medium text-mrs-gold transition hover:bg-mrs-gold/10"
        >
          {hasVariants ? "Select options" : "Add to cart"}
        </Link>
      </div>
    </article>
  );
}
