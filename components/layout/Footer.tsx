import Link from "next/link";
import { TrendingNow } from "./TrendingNow";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-white"
            >
              MICRO REALM SOCIETY
            </Link>
            <p className="mt-2 max-w-sm text-sm text-gray-500">
              The Best Consciousness And Awareness For Your Mind.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="/shop" className="text-sm text-gray-400 hover:text-mrs-gold">
              Shop
            </Link>
            <Link href="/our-beliefs" className="text-sm text-gray-400 hover:text-mrs-gold">
              Our Beliefs
            </Link>
            <Link href="/my-account" className="text-sm text-gray-400 hover:text-mrs-gold">
              My Account
            </Link>
          </nav>
        </div>
        <TrendingNow />
        <p className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Micro Realm Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
