"use client";

import { useState } from "react";

export function LostPasswordForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Supabase auth resetPasswordForEmail
    console.log({ email });
    alert("Reset link would be sent (demo). Connect Supabase Auth.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="email" className="block text-sm text-gray-400">
        Username or email
      </label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 w-full rounded border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-mrs-gold focus:outline-none"
        required
      />
      <button
        type="submit"
        className="mt-4 w-full rounded bg-mrs-gold py-3 font-semibold text-black hover:bg-amber-500"
      >
        Reset password
      </button>
    </form>
  );
}
