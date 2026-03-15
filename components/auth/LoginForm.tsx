"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // Nouveau champ pour le nom
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      // 1. Tentative d'inscription (Sign Up)
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      // 2. Si l'utilisateur existe déjà, on tente la connexion (Sign In)
      if (signUpError && signUpError.message.toLowerCase().includes("already registered")) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          setErrorMsg(signInError.message);
          setLoading(false);
          return;
        }
      } 
      // 3. Si c'est une autre erreur d'inscription
      else if (signUpError) {
        setErrorMsg(signUpError.message);
        setLoading(false);
        return;
      }

      // Succès : Petit message avant redirection
      setSuccessMsg("Connexion réussie ! Redirection...");
      router.refresh();
      
      // On attend un court instant pour que l'utilisateur voit le succès
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch (err) {
      setErrorMsg("Une erreur réseau est survenue. Vérifiez votre connexion.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Login or Register</h2>

        {/* Messages d'alerte */}
        {errorMsg && (
          <div className="rounded bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="rounded bg-green-500/10 p-3 text-sm text-green-500 border border-green-500/20">
            {successMsg}
          </div>
        )}

        {/* Champ Nom Complet (Utile pour la première inscription) */}
        <div>
          <label htmlFor="fullName" className="block text-sm text-gray-400">
            Full Name (for new accounts)
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 w-full rounded border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-mrs-gold focus:outline-none disabled:opacity-50"
            placeholder="John Doe"
            disabled={loading}
          />
        </div>

        <div>
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
            className="mt-1 w-full rounded border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-mrs-gold focus:outline-none disabled:opacity-50"
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-mrs-gold py-3 font-semibold text-black hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></span>
              Traitement...
            </>
          ) : (
            "Log in / Sign up"
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          <Link href="/my-account/lost-password" className="text-mrs-gold hover:underline">
            Lost your password?
          </Link>
        </p>
      </form>
    </div>
  );
}