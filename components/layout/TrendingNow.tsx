import Link from "next/link";
import { getTrendingProductSlugs } from "@/lib/supabase/queries/products";

export async function TrendingNow() {
  const slugs = await getTrendingProductSlugs(4);
  if (slugs.length === 0) return null;
  return (
    <div className="border-t border-white/10 py-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-mrs-gold">
        Trending now
      </h3>
      <ul className="flex flex-wrap gap-4">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              href={`/product/${slug}`}
              className="text-sm text-gray-400 underline decoration-mrs-gold/50 underline-offset-2 transition hover:text-mrs-gold"
            >
              {slug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
