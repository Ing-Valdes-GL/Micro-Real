import { createClient } from "../server";
import type { Testimonial } from "@/types/database";

export async function getTestimonials() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("order_index");
  if (error) return [];
  return (data ?? []) as Testimonial[];
}
