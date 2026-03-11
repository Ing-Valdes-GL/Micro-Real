import { getProductBySlug, getProductVariants } from "@/lib/supabase/queries/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVariants } from "@/components/product/ProductVariants";
import { AddToCartForm } from "@/components/product/AddToCartForm";

type Props = { params: Promise<{ slug: string }> };

function formatPrice(price: number, salePrice: number | null) {
  const value = salePrice ?? price;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const variants = product ? await getProductVariants(product.id) : [];

  if (!product) notFound();

  const imageUrl =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : "/placeholder-product.svg";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          {product.on_sale && (
            <span className="inline-block rounded bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
              SALE
            </span>
          )}
          <h1 className="mt-2 text-3xl font-bold text-white">{product.name}</h1>
          <p className="mt-4 text-2xl text-mrs-gold">
            {formatPrice(product.price, product.sale_price)}
          </p>
          <AddToCartForm product={product} variants={variants} />
          <dl className="mt-8 space-y-2 border-t border-white/10 pt-6">
            <div>
              <dt className="text-sm text-gray-500">SKU</dt>
              <dd className="text-white">{product.sku ?? "N/A"}</dd>
            </div>
            {product.category && (
              <div>
                <dt className="text-sm text-gray-500">Category</dt>
                <dd>
                  <Link
                    href={`/shop/${product.category.slug}`}
                    className="text-mrs-gold hover:underline"
                  >
                    {product.category.name}
                  </Link>
                </dd>
              </div>
            )}
          </dl>
          {product.description && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <h2 className="font-semibold text-white">Description</h2>
              <div
                className="mt-2 text-gray-400 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: product.description.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
