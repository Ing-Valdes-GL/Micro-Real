import { getProducts } from "@/lib/supabase/queries/products";
import { ProductCard } from "@/components/shop/ProductCard";

export async function SaleProducts() {
  const products = await getProducts({ limit: 4 });
  const onSale = products.filter((p) => p.on_sale);
  const display = onSale.length >= 2 ? onSale.slice(0, 4) : products.slice(0, 4);

  if (display.length === 0) return null;

  return (
    <section className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-gray-500">
          Limited time. Same magic. Better price.
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-white">
          On Sale Products
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {display.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
