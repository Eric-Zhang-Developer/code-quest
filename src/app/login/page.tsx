"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }
      router.push("/dashboard");
    } catch (e: unknown) {
      let errorMessage = "Something went wrong. Please try again";
      if (e instanceof Error) errorMessage = e.message;
      else if (typeof e === "string") errorMessage = e;
      setErr(errorMessage);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main
      className="min-h-dvh flex items-center justify-center bg-cover bg-center bg-no-repeat p-6 font-cinzel text-white"
      style={{ backgroundImage: "url('/geminiblurred.png')" }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.25)] p-8 transition-all flex flex-col">
        <h1 className="text-4xl text-center mb-6 font-bold drop-shadow-lg">
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </h1>

        {err && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/40 border border-red-400/30 p-2 rounded-md">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4 animate-fadeIn">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-2 rounded-md bg-transparent border border-white/40 focus:border-indigo-400 focus:shadow-[0_0_12px_rgba(140,120,255,0.8)] outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-2 rounded-md bg-transparent border border-white/40 focus:border-indigo-400 focus:shadow-[0_0_12px_rgba(140,120,255,0.8)] outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={busy}
            className={`w-full py-2 rounded-md font-semibold mt-4 transition ${
              busy
                ? "bg-indigo-700/60 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(140,120,255,0.7)]"
            }`}
          >
            {busy ? "Loading..." : mode === "login" ? "Log In" : "Create Account"}
          </button>
        </form>

        <section className="flex flex-col gap-4 text-center">
          <div className="mt-5">
            <p className="text-center">Or continue with</p>
          </div>

          {/* Google */}
          <div>
            <button className="w-full p-2 rounded-md bg-transparent border border-white/40 focus:border-indigo-400 focus:shadow-[0_0_12px_rgba(140,120,255,0.8)] outline-none transition">
              Google
            </button>
          </div>

          {/* Github */}
          <div>
            <button className="w-full p-2 rounded-md bg-transparent border border-white/40 focus:border-indigo-400 focus:shadow-[0_0_12px_rgba(140,120,255,0.8)] outline-none transition">
              Github
            </button>
          </div>
        </section>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-sm text-indigo-300 hover:text-indigo-200 transition mt-2 underline"
          >
            {mode === "login" ? "Join the Realm" : "Return to Login"}
          </button>
        </div>
      </div>
    </main>
  );
}
