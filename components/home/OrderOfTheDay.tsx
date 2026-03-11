import Link from "next/link";

export function OrderOfTheDay() {
  return (
    <section className="border-b border-white/10 bg-mrs-gold/10 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">Order of the Day!</h2>
        <p className="mt-2 text-gray-300">
          Free Shipping for USA orders 300+
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-md bg-mrs-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-amber-500"
        >
          Grab The Order Now
        </Link>
        <div className="mt-8 flex justify-center gap-8">
          <span className="text-2xl font-bold text-mrs-gold">300+</span>
          <span className="text-gray-400">FREE SHIPPING</span>
        </div>
      </div>
    </section>
  );
}
