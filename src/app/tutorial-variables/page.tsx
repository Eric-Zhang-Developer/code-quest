"use client";

import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman= more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

export default function TutorialHelloWorld() {
  return (
    // Background of scroll
    <div
      className="min-h-screen p-4 md:p-12"
      style={{
        backgroundImage: "url('/geminiblurred.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#fef3c7",
      }}
    >
      <div className="inline-block p-4" style={{ zIndex: 10 }}>
        <BackToDashBoardLink />
      </div>

      {/* "scroll"*/}
      <article
        className={`max-w-4xl mx-auto bg-amber-100 p-8 md:p-12 shadow-2xl shadow-amber-950/70 space-y-8 
                          ${bodyFontClass} border border-amber-800 transform rotate-[-0.5deg] 
                          rounded-t-[4rem] rounded-b-lg`}
      >
        {/* title*/}
        <h1
          className={`text-4xl md:text-5xl font-bold ${cinzelTitleClass} 
                        border-b-4 border-amber-900 pb-4 mb-8 text-center uppercase`}
        >
          Quest: The Artisan&apos;s Toolkit - Mastering the Variable Vaults
        </h1>

        <hr className="my-8 border-amber-900/50" />
      </article>
    </div>
  );
}
