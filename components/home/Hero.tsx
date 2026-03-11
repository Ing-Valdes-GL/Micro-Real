import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-mrs-dark to-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome To Micro Realm Society!
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-mrs-gold sm:text-4xl">0 +</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-gray-400">
              Customers
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-mrs-gold sm:text-4xl">0 +</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-gray-400">
              Years of Experience
            </p>
          </div>
        </div>
        <Link
          href="/shop"
          className="mt-10 inline-block rounded-md bg-mrs-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-amber-500"
        >
          Order Now
        </Link>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400">
          Micro Realm Society is a First Amendment-protected spiritual
          organization blending ancient rituals with modern neuroscience.
          Through sacred sacraments like mushrooms and other modalities, we help
          members reconnect to source, ease anxiety, and awaken their highest
          frequency. Where ceremony meets chemistry—this is transformation, not
          sedation.
        </p>
        <Link
          href="/our-beliefs"
          className="mt-6 inline-block text-sm font-medium text-mrs-gold underline decoration-mrs-gold/50 underline-offset-2 hover:text-amber-400"
        >
          Our Beliefs System
        </Link>
      </div>
    </section>
  );
}
