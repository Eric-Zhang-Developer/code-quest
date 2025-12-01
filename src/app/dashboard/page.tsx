import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { createClient as createServerClient } from "../../lib/supabase/server";
import { Cinzel } from "next/font/google";
import { ArrowBigLeft, ArrowBigDown, ArrowBigRight } from "lucide-react";

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

async function resetQuestProgress() {
  "use server";
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  // Delete all quest completions for this user
  // The trigger will automatically update quests_completed count to 0
  const { error: deleteError } = await supabase
    .from("quest_completions")
    .delete()
    .eq("user_id", user.id);

  if (deleteError) {
    console.error("Error deleting quest completions:", deleteError);
  }

  // Revalidate the dashboard and profile pages to refresh data
  revalidatePath("/dashboard");
  revalidatePath("/profile");

  // Redirect to refresh the page
  redirect("/dashboard");
}

export default async function DashboardPage() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch individual quest completions from quest_completions table
  const { data: questCompletions, error: completionsError } = await supabase
    .from("quest_completions")
    .select("quest_id")
    .eq("user_id", user.id);

  if (completionsError) {
    console.error(`Error fetching quest completions: ${completionsError.message}`);
  }

  // Create a Set of completed quest IDs for quick lookup
  const completedQuestIds = new Set(questCompletions?.map((qc) => qc.quest_id) || []);

  // Check individual quest completion status
  const isHelloWorldComplete = completedQuestIds.has("hello-world");
  const isVariablesComplete = completedQuestIds.has("variables");
  const isUserInputComplete = completedQuestIds.has("user-input");
  const isConditionalsComplete = completedQuestIds.has("conditionals");
  const isLoopsComplete = completedQuestIds.has("loops");
  const isMathComplete = completedQuestIds.has("math");
  const isFunctionsComplete = completedQuestIds.has("functions");
  const isListsArraysComplete = completedQuestIds.has("lists-arrays");
  const isDictionaryComplete = completedQuestIds.has("dictionary");
  const isRecursionComplete = completedQuestIds.has("recursion");

  const celestialButtonClasses =
    "btn border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-cyan-200 shadow-lg shadow-cyan-500/50 transition duration-300 ease-in-out w-full";

  const celestialButtonNoFullWidth =
    "btn border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-cyan-200 shadow-lg shadow-cyan-500/50 transition duration-300 ease-in-out";

  const greyButtonClass =
    "btn border-2 border-gray-400 text-gray-400 bg-black/50 backdrop-blur-sm hover:bg-gray-900/50 hover:border-gray-200 hover:text-gray-200 shadow-lg shadow-gray-500/50 transition duration-300 ease-in-out";

  const greenButtonClass =
    "btn border-2 border-emerald-400 text-emerald-400 bg-emerald-900/60 backdrop-blur-sm hover:bg-emerald-900/50 hover:border-emerald-200 hover:text-emerald-200 shadow-lg shadow-emerald-400/70 transition duration-300 ease-in-out";

  // helpers
  const getButtonClass = (complete: boolean) => (complete ? greenButtonClass : greyButtonClass);
  const getArrowColor = (complete: boolean) => (complete ? "text-emerald-400" : "text-gray-400");

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
          <h1 className="text-white text-6xl font-bold tracking-wider mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4 p-0 w-fit">
          <Link href="/" className={celestialButtonNoFullWidth}>
            <span>Home</span>
          </Link>
          <Link href="/profile" className={celestialButtonNoFullWidth}>
            <span>Profile</span>
          </Link>
          <form action={resetQuestProgress}>
            <button type="submit" className={celestialButtonNoFullWidth}>
              <span>Reset Quests</span>
            </button>
          </form>
          <form action={logout}>
            <button type="submit" className={celestialButtonNoFullWidth}>
              <span>Log out</span>
            </button>
          </form>
        </div>
      </div>

      {/* Tutorials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/10">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center w-[500px]">
          {/* Row 1: Hello World → Variables */}
          <Link href="tutorial-hello-world" className={getButtonClass(isHelloWorldComplete)}>
            Hello World
          </Link>
          <ArrowBigRight className={getArrowColor(isVariablesComplete)} size={28} />
          <Link href="tutorial-variables" className={getButtonClass(isVariablesComplete)}>
            Variables
          </Link>

          <div className="col-span-3 flex justify-end pr-12">
            <ArrowBigDown className={getArrowColor(isUserInputComplete)} size={28} />
          </div>

          {/* Row 2: Conditionals ← User Input */}
          <Link href="tutorial-conditionals" className={getButtonClass(isConditionalsComplete)}>
            Conditionals
          </Link>
          <ArrowBigLeft className={getArrowColor(isConditionalsComplete)} size={28} />
          <Link href="tutorial-user-input" className={getButtonClass(isUserInputComplete)}>
            User Input
          </Link>

          <div className="col-span-3 flex justify-start pl-12">
            <ArrowBigDown className={getArrowColor(isLoopsComplete)} size={28} />
          </div>

          {/* Row 3: Loops → Math */}
          <Link href="tutorial-loops" className={getButtonClass(isLoopsComplete)}>
            Loops
          </Link>
          <ArrowBigRight className={getArrowColor(isMathComplete)} size={28} />
          <Link href="tutorial-math" className={getButtonClass(isMathComplete)}>
            Math
          </Link>

          <div className="col-span-3 flex justify-end pr-12">
            <ArrowBigDown className={getArrowColor(isFunctionsComplete)} size={28} />
          </div>

          {/* Row 4: Lists & Arrays ← Functions */}
          <Link href="tutorial-lists-arrays" className={getButtonClass(isListsArraysComplete)}>
            Lists & Arrays
          </Link>
          <ArrowBigLeft className={getArrowColor(isListsArraysComplete)} size={28} />
          <Link href="tutorial-functions" className={getButtonClass(isFunctionsComplete)}>
            Functions
          </Link>

          <div className="col-span-3 flex justify-start pl-12">
            <ArrowBigDown className={getArrowColor(isDictionaryComplete)} size={28} />
          </div>

          {/* Row 5: Dictionary → Recursion */}
          <Link href="tutorial-dictionary" className={getButtonClass(isDictionaryComplete)}>
            Dictionary
          </Link>
          <ArrowBigRight className={getArrowColor(isRecursionComplete)} size={28} />
          <Link href="tutorial-recursion" className={getButtonClass(isRecursionComplete)}>
            Recursion
          </Link>
        </div>
      </div>
    </main>
  );
}
