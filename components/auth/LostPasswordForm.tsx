"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function LostPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Tentative d'envoi du lien de réinitialisation
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      // Cette URL est celle où l'utilisateur sera renvoyé après avoir cliqué dans son mail
      redirectTo: `${window.location.origin}/auth/callback?next=/my-account/update-password`,
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ 
        type: 'success', 
        text: "Si un compte existe pour cet e-mail, un lien de réinitialisation a été envoyé." 
      });
    }
    
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      {message && (
        <div className={`mb-4 rounded p-3 text-sm border ${
          message.type === 'success' 
            ? 'bg-green-500/10 text-green-500 border-green-500/20' 
            : 'bg-red-500/10 text-red-500 border-red-500/20'
        }`}>
          {message.text}
        </div>
      )}

      <label htmlFor="email" className="block text-sm text-gray-400">
        Email address
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 w-full rounded border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-mrs-gold focus:outline-none disabled:opacity-50"
        placeholder="votre@email.com"
        required
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded bg-mrs-gold py-3 font-semibold text-black hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Sending..." : "Reset password"}
      </button>
    </form>
  );
}