import { getProducts, getCategories } from "@/lib/supabase/queries/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopFilters } from "@/components/shop/ShopFilters";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ sort?: string; page?: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { sort, page } = await searchParams;
  const pageNum = Math.max(1, parseInt(String(page), 10) || 1);
  const limit = 12;
  const offset = (pageNum - 1) * limit;

  const [products, categories] = await Promise.all([
    getProducts({
      sort:
        sort === "price_asc"
          ? "price_asc"
          : sort === "price_desc"
            ? "price_desc"
            : "latest",
      limit,
      offset,
    }),
    getCategories(),
  ]);

  const total = 17; // TODO: get from Supabase count
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">
        Shop Our Sacraments
      </h1>
      <p className="mt-2 text-gray-500">
        Showing {(pageNum - 1) * limit + 1}–{Math.min(pageNum * limit, total)} of{" "}
        {total} results
      </p>
      <ShopFilters sort={sort} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="mt-10 flex justify-center gap-2">
          {pageNum > 1 && (
            <Link
              href={`/shop?page=${pageNum - 1}${sort ? `&sort=${sort}` : ""}`}
              className="rounded border border-white/20 px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
            >
              Previous
            </Link>
          )}
          <span className="px-4 py-2 text-sm text-gray-500">
            Page {pageNum} of {totalPages}
          </span>
          {pageNum < totalPages && (
            <Link
              href={`/shop?page=${pageNum + 1}${sort ? `&sort=${sort}` : ""}`}
              className="rounded border border-white/20 px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
            >
              Next
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
