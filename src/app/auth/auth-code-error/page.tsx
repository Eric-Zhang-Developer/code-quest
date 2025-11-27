import Link from "next/link";

export default function AuthCodeError() {
  return (
    <main
      className="min-h-dvh flex items-center justify-center bg-cover bg-center bg-no-repeat p-6 font-cinzel text-white"
      style={{ backgroundImage: "url('/geminiblurred.png')" }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.25)] p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">⚠️ Authentication Failed</h1>
        <p className="text-white/70 mb-6">
          Something went wrong while signing you in. This could happen if the login was cancelled or
          took too long.
        </p>
        <Link
          href="/login"
          className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md font-semibold transition shadow-[0_0_20px_rgba(140,120,255,0.7)]"
        >
          Try Again
        </Link>
      </div>
    </main>
  );
}
