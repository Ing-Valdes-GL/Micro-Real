export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  short_description: string | null;
  price: number;
  sale_price: number | null;
  images: string[];
  category_id: string | null;
  category?: Category;
  sku: string | null;
  on_sale: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  name: string;
  options: string[] | Json;
  price_modifier: number;
  order_index?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  product_count?: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  product_name: string;
  content: string;
  order_index: number;
}

export interface Aphorism {
  id: string;
  author: string;
  quote: string;
  order_index: number;
}

export interface CartItem {
  product_id: string;
  variant_id?: string;
  option?: string;
  quantity: number;
  product?: Product;
}
