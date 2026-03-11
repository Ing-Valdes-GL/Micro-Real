"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = { sort?: string; basePath?: string };

export function ShopFilters({ sort, basePath = "/shop" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("sort", value);
    else params.delete("sort");
    params.delete("page");
    router.push(`${basePath}?${params.toString()}`);
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <span className="text-sm text-gray-500">Default sorting</span>
      <select
        value={sort ?? ""}
        onChange={(e) => setSort(e.target.value)}
        className="rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-mrs-gold focus:outline-none"
      >
        <option value="">Sort by latest</option>
        <option value="popularity">Sort by popularity</option>
        <option value="price_asc">Sort by price: low to high</option>
        <option value="price_desc">Sort by price: high to low</option>
      </select>
    </div>
  );
}
