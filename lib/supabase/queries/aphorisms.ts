import { createClient } from "../server";
import type { Aphorism } from "@/types/database";

export async function getAphorisms() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("aphorisms")
    .select("*")
    .order("order_index");
  if (error) return [];
  return (data ?? []) as Aphorism[];
}
