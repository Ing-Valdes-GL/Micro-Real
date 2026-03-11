import { getProducts, getCategories } from "@/lib/supabase/queries/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopFilters } from "@/components/shop/ShopFilters";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sort?: string; page?: string }>;
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category: categorySlug } = await params;
  const { sort, page } = await searchParams;
  const pageNum = Math.max(1, parseInt(String(page), 10) || 1);
  const limit = 12;
  const offset = (pageNum - 1) * limit;

  const [products, categories] = await Promise.all([
    getProducts({
      categorySlug,
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

  const category = categories.find((c) => c.slug === categorySlug);
  if (!category && categories.length > 0) notFound();

  const total = products.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white capitalize">
        {category?.name ?? categorySlug}
      </h1>
      <p className="mt-2 text-gray-500">
        Showing all {total} results
      </p>
      <ShopFilters sort={sort} basePath={`/shop/${categorySlug}`} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="mt-10 flex justify-center gap-2">
          {pageNum > 1 && (
            <Link
              href={`/shop/${categorySlug}?page=${pageNum - 1}${sort ? `&sort=${sort}` : ""}`}
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
              href={`/shop/${categorySlug}?page=${pageNum + 1}${sort ? `&sort=${sort}` : ""}`}
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
