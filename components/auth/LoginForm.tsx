"use client";

import { useState } from "react";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Supabase auth signInWithPassword
    console.log({ email, password, remember });
    alert("Login (demo). Connect Supabase Auth.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm text-gray-400">
          Username or email address
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-mrs-gold focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm text-gray-400">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-mrs-gold focus:outline-none"
          required
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-gray-400">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="rounded border-white/20"
        />
        Remember me
      </label>
      <button
        type="submit"
        className="w-full rounded bg-mrs-gold py-3 font-semibold text-black hover:bg-amber-500"
      >
        Log in
      </button>
      <p className="text-center text-sm text-gray-500">
        <Link href="/my-account/lost-password" className="text-mrs-gold hover:underline">
          Lost your password?
        </Link>
      </p>
    </form>
  );
}
