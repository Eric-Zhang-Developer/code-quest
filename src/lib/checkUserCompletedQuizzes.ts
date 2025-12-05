import { createClient } from "./supabase/server";

export default async function checkUserCompletedQuizzes() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User not logged in, cannot save progress.");
    return new Set();
  }

  const { data: quizData, error: selectError } = await supabase
    .from("quest_completions")
    .select("quest_id")
    .eq("user_id", user.id);

  if (selectError) {
    console.error(`Supabase selection error: ${selectError.message}`);
    return new Set();
  }

  return new Set(quizData.map((row) => row.quest_id));
}
