import { getProducts } from "@/lib/supabase/queries/products";
import { ProductCard } from "@/components/shop/ProductCard";

export async function PopularProducts() {
  const products = await getProducts({ limit: 6 });

  if (products.length === 0) return null;

  return (
    <section className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-white">Popular</h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          When timing aligns, the path becomes lighter
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
