import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient as createServerClient } from "../../lib/supabase/server";
import { Cinzel } from "next/font/google";
import checkUserCompletedQuizzes from "@/lib/checkUserCompletedQuizzes";

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

  if (!user) redirect("/login");

  // Completed quizzes
  const completedQuizzes = await checkUserCompletedQuizzes();

  const isHelloWorldComplete = completedQuizzes.has("hello-world");
  const isVariablesComplete = completedQuizzes.has("variables");
  const isUserInputComplete = completedQuizzes.has("user-input");
  const isConditionalsComplete = completedQuizzes.has("conditionals");
  const isLoopsComplete = completedQuizzes.has("loops");
  const isMathComplete = completedQuizzes.has("math");
  const isFunctionsComplete = completedQuizzes.has("functions");
  const isListsArraysComplete = completedQuizzes.has("lists-arrays");
  const isDictionaryComplete = completedQuizzes.has("dictionary");
  const isRecursionComplete = completedQuizzes.has("recursion");

  const celestialButtonClasses =
    "btn border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-cyan-200 shadow-lg shadow-cyan-500/50 transition duration-300 ease-in-out w-full";

  const celestialButtonNoFullWidth =
    "btn border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-cyan-200 shadow-lg shadow-cyan-500/50 transition duration-300 ease-in-out";

  const greyButtonClass =
    "btn border-2 border-gray-400 text-gray-400 bg-transparent hover:bg-gray-900/50 hover:border-gray-200 hover:text-gray-200 shadow-lg shadow-gray-500/50 transition duration-300 ease-in-out";

  const greenButtonClass =
    "btn border-2 border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-900/50 hover:border-emerald-200 hover:text-emerald-200 shadow-lg shadow-emerald-500/50 transition duration-300 ease-in-out";

  // helper
  const getButtonClass = (complete: boolean) => (complete ? greenButtonClass : greyButtonClass);

  return (
    <main
      className={`relative min-h-dvh p-8 text-white ${cinzel.className}`}
      style={{
        backgroundImage: "url('/dashboard.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-4 p-0 w-fit">
          <h1 className="text-white text-5xl font-bold tracking-wider mb-4">Dashboard</h1>
          <div className="flex flex-col gap-4 w-32">
            <Link href="/" className={celestialButtonClasses}>
              <span>Home</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 p-0 w-fit">
          <Link href="/profile" className={celestialButtonNoFullWidth}>
            <span>Profile</span>
          </Link>
          <form action={logout}>
            <button type="submit" className={celestialButtonNoFullWidth}>
              <span>Log out</span>
            </button>
          </form>
        </div>
      </div>

      {/* Tutorials */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-6 w-64 text-center">
          <Link href="tutorial-hello-world" className={getButtonClass(isHelloWorldComplete)}>
            Hello World
          </Link>

          <Link href="tutorial-variables" className={getButtonClass(isVariablesComplete)}>
            Variables
          </Link>

          <Link href="tutorial-user-input" className={getButtonClass(isUserInputComplete)}>
            User Input
          </Link>

          <Link href="tutorial-conditionals" className={getButtonClass(isConditionalsComplete)}>
            Conditionals
          </Link>

          <Link href="tutorial-loops" className={getButtonClass(isLoopsComplete)}>
            Loops
          </Link>

          <Link href="tutorial-math" className={getButtonClass(isMathComplete)}>
            Math
          </Link>

          <Link href="tutorial-functions" className={getButtonClass(isFunctionsComplete)}>
            Functions
          </Link>

          <Link href="tutorial-lists-arrays" className={getButtonClass(isListsArraysComplete)}>
            Lists & Arrays
          </Link>

          <Link href="tutorial-dictionary" className={getButtonClass(isDictionaryComplete)}>
            Dictionary
          </Link>

          <Link href="tutorial-recursion" className={getButtonClass(isRecursionComplete)}>
            Recursion
          </Link>
        </div>
      </div>
    </main>
  );
}
