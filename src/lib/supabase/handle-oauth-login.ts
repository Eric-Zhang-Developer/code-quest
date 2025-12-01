"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

// 1. Create a helper to get the REAL base URL
const getURL = () => {
  let url = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? "http://localhost:3000";

  url = url.includes("http") ? url : `https://${url}`;
  url = url.replace(/\/$/, "");
  return url;
};

export default async function handleOAuthLogin(provider: "github" | "google") {
  const supabase = await createClient();
  const origin = getURL();
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
