import { createClient } from "./supabase/client";

/**
 * Updates the quests_completed count in the profiles table
 * by counting distinct quiz_ids completed by the user
 */
export async function updateQuestCount() {
  const supabase = createClient();

  // Get user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User not logged in, cannot update quest count.");
    return;
  }

  // Count distinct quiz_ids for this user
  const { data: quizData, error: selectError } = await supabase
    .from("user_quiz_progress")
    .select("quiz_id")
    .eq("user_id", user.id);

  if (selectError) {
    console.error(`Error fetching quiz progress: ${selectError.message}`);
    return;
  }

  // Get unique quiz IDs
  const uniqueQuizIds = new Set(quizData?.map((row) => row.quiz_id) || []);
  const questsCompleted = uniqueQuizIds.size;

  // Update the profiles table
  const { error: updateError } = await supabase
    .from("profiles")
    .update({ quests_completed: questsCompleted })
    .eq("id", user.id);

  if (updateError) {
    console.error(`Error updating quest count: ${updateError.message}`);
  }
}

