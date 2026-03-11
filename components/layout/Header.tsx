"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-mrs-dark/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-wide text-white">
          MICRO REALM SOCIETY
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/shop"
            className="text-sm text-gray-300 transition hover:text-mrs-gold"
          >
            Shop
          </Link>
          <Link
            href="/our-beliefs"
            className="text-sm text-gray-300 transition hover:text-mrs-gold"
          >
            Our Beliefs
          </Link>
          <Link
            href="/cart"
            className="text-sm text-gray-300 transition hover:text-mrs-gold"
          >
            Cart
          </Link>
          <Link
            href="/my-account"
            className="text-sm text-gray-300 transition hover:text-mrs-gold"
          >
            My Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
