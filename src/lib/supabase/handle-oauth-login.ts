"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";
import { headers } from "next/headers";
export default async function handleOAuthLogin(provider: "github" | "google") {
  const supabase = await createClient();
  const headersList = await headers();
  const origin = headersList.get("origin") ?? `https://${headersList.get("host")}`;;
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: { redirectTo: `${origin}/auth/callback?next=/dashboard` },
  });

  if (error) throw error;
  else {
    return redirect(data.url);
  }
}
