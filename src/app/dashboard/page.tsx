import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient as createServerClient } from "../../lib/supabase/server";

async function logout() {
  "use server";
  const supabase = await createServerClient();
  await supabase.auth.signOut();
  redirect("/");
}

export default async function DashboardPage() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="bg-white min-h-dvh p-8">
      <div className="flex items-center gap-4">
        <h1 className="text-black text-2xl font-semibold">Dashboard</h1>
        <Link href="/" className="btn btn-neutral btn-outline" aria-label="Go home">
          <span>Home</span>
        </Link>
        <Link href="/profile" className="btn btn-neutral btn-outline" aria-label="Go to profile">
          <span>Profile</span>
        </Link>
        <form action={logout}>
          <button type="submit" className="btn btn-neutral btn-outline">
            <span>Log out</span>
          </button>
        </form>
      </div>

      <p className="my-4 text-neutral-600">
        You&apos;re logged in as: <span className="font-bold">{user.email}</span>.
      </p>

      <Link href="tutorial-hello-world" className="btn btn-neutral btn-outline">
        Hello World Tutorial
      </Link>
    </main>
  );
}
