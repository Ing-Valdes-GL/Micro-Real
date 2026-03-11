"use client";

import type { ProductVariant } from "@/types/database";

type Props = {
  variants: ProductVariant[];
  selected: Record<string, string>;
  onChange: (name: string, value: string) => void;
};

export function ProductVariants({ variants, selected, onChange }: Props) {
  if (variants.length === 0) return null;

  return (
    <div className="mt-6 space-y-4">
      {variants.map((v) => (
        <div key={v.id}>
          <label className="block text-sm font-medium text-gray-400">
            {v.name}
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Array.isArray(v.options) ? v.options : []).map((opt: string) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange(v.name, opt)}
                className={`rounded border px-3 py-1.5 text-sm transition ${
                  selected[v.name] === opt
                    ? "border-mrs-gold bg-mrs-gold/20 text-mrs-gold"
                    : "border-white/20 text-gray-400 hover:border-white/40"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
