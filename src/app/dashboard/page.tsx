import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient as createServerClient } from "../../lib/supabase/server";
import { Cinzel } from 'next/font/google'; // Import Cinzel font

//font for words
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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

  const celestialButtonClasses = "btn border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-cyan-200 shadow-lg shadow-cyan-500/50 transition duration-300 ease-in-out w-full";
  const celestialButtonNoFullWidth = "btn border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-cyan-200 shadow-lg shadow-cyan-500/50 transition duration-300 ease-in-out";


  return (
    <main
      className={`relative min-h-dvh p-8 text-white ${cinzel.className}`}
      style={{
        backgroundImage: "url('/dashboard.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-between items-start w-full"> 
        
        <div className="flex flex-col gap-4 p-0 w-fit"> 
          <h1 className="text-white text-5xl font-bold tracking-wider mb-4">
            Dashboard
          </h1>
          <div className="flex flex-col gap-4 w-32"> 
            <Link href="/" className={celestialButtonClasses} aria-label="Go home">
              <span>Home</span>
            </Link>
          </div>
        </div>

        {/* profile & logout */}
        <div className="flex items-center gap-4 p-0 w-fit"> 
          <Link href="/profile" className={celestialButtonNoFullWidth} aria-label="Go to profile">
            <span>Profile</span>
          </Link>
          <form action={logout}>
            <button type="submit" className={celestialButtonNoFullWidth}>
              <span>Log out</span>
            </button>
          </form>
        </div>
      </div>

      {/* tutorials */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <Link href="tutorial-hello-world" className={celestialButtonNoFullWidth}>
            Hello World
          </Link>
        </div>
    </main>
  );
}