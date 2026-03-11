import Link from "next/link";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Cart</h1>
      <p className="mt-4 text-gray-500">
        Your cart is currently empty.
      </p>
      <Link
        href="/shop"
        className="mt-6 inline-block text-mrs-gold underline hover:no-underline"
      >
        Return to shop
      </Link>
    </div>
  );
}
