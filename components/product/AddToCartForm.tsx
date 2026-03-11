"use client";

import { useState } from "react";
import type { Product } from "@/types/database";
import type { ProductVariant } from "@/types/database";
import { ProductVariants } from "./ProductVariants";

type Props = { product: Product; variants: ProductVariant[] };

export function AddToCartForm({ product, variants }: Props) {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);

  const hasVariants = variants.length > 0;
  const canAdd =
    !hasVariants ||
    variants.every((v) => selected[v.name] && selected[v.name].length > 0);

  function handleAddToCart(e: React.FormEvent) {
    e.preventDefault();
    if (!canAdd) return;
    // TODO: add to cart context / Supabase cart
    const payload = {
      product_id: product.id,
      quantity,
      options: hasVariants ? selected : undefined,
    };
    console.log("Add to cart", payload);
    alert("Added to cart (demo). Connect cart state or API.");
  }

  return (
    <form onSubmit={handleAddToCart} className="mt-6">
      <ProductVariants
        variants={variants}
        selected={selected}
        onChange={(name, value) => setSelected((s) => ({ ...s, [name]: value }))}
      />
      <div className="mt-6 flex items-center gap-4">
        <label className="text-sm text-gray-400">Quantity</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
          className="w-20 rounded border border-white/20 bg-white/5 px-3 py-2 text-white"
        />
      </div>
      <button
        type="submit"
        disabled={!canAdd}
        className="mt-6 w-full rounded bg-mrs-gold py-3 font-semibold text-black transition hover:bg-amber-500 disabled:opacity-50"
      >
        Add to cart
      </button>
    </form>
  );
}
