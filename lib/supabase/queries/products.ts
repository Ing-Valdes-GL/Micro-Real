import { createClient } from "../server";
import type { Product } from "@/types/database";

export async function getProducts(opts?: {
  categorySlug?: string;
  sort?: "popularity" | "latest" | "price_asc" | "price_desc";
  limit?: number;
  offset?: number;
}) {
  const supabase = await createClient();
  let query = supabase
    .from("products")
    .select("*, category:categories(id, slug, name)")
    .eq("published", true);

  if (opts?.categorySlug) {
    const { data: cat } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", opts.categorySlug)
      .single();
    if (cat) query = query.eq("category_id", cat.id);
  }

  switch (opts?.sort) {
    case "price_asc":
      query = query.order("sale_price", { ascending: true, nullsFirst: false });
      break;
    case "price_desc":
      query = query.order("sale_price", { ascending: false, nullsFirst: true });
      break;
    case "latest":
      query = query.order("created_at", { ascending: false });
      break;
    default:
      query = query.order("created_at", { ascending: false });
  }

  if (opts?.limit) query = query.limit(opts.limit);
  if (opts?.offset) query = query.range(opts.offset, opts.offset + (opts.limit ?? 12) - 1);

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as Product[];
}

export async function getProductBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, category:categories(id, slug, name)")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error) return null;
  return data as Product;
}

export async function getProductVariants(productId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("product_variants")
    .select("*")
    .eq("product_id", productId)
    .order("order_index");
  if (error) return [];
  return data ?? [];
}

export async function getCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("id, slug, name")
    .order("name");
  if (error) return [];
  return data ?? [];
}

export async function getTrendingProductSlugs(limit = 4) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("slug")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  return (data ?? []).map((p) => p.slug);
}
