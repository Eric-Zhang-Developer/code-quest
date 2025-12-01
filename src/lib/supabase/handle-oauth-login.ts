"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

export default async function handleOAuthLogin(provider: "github" | "google") {
  const supabase = await createClient();

  const origin = "https://intro-swe-term-project.vercel.app";

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${origin}/auth/callback?next=/dashboard`,
    },
  });

  if (error) throw error;
  else {
    return redirect(data.url);
  }
}
