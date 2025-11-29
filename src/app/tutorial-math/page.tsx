"use client";

import React from "react";
import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";
import { Cinzel } from "next/font/google";
import { mathQuiz } from "@/data/quizzes/06-math";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

export default function TutorialMath() {
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

      {/* "scroll" */}
      <article
        className={`max-w-4xl mx-auto bg-amber-100 p-8 md:p-12 shadow-2xl shadow-amber-950/70 space-y-8 
          ${bodyFontClass} border border-amber-800 transform rotate-[-0.5deg] 
          rounded-t-[4rem] rounded-b-lg`}
      >
        {/* title */}
        <h1
          className={`text-4xl md:text-5xl font-bold ${cinzelTitleClass} 
            border-b-4 border-amber-900 pb-4 mb-8 text-center uppercase`}
        >
          Quest: The Numeromancer&apos;s Trial – Basic Math & Comparisons
        </h1>

        <p className="text-xl italic text-amber-900">
          Every adventurer needs to count coins, track health, and compare stats. In code, this is
          the work of the numeromancer—you, using math and comparisons to understand the world
          and make decisions.
        </p>
        <p className="text-lg">
          This quest teaches you how to do basic calculations (add, subtract, multiply, divide) and
          how to compare values (greater than, equal to, etc.) so your programs can react
          intelligently.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Is This Number Magic?
          </h2>

          <p className="text-lg">Basic math operators let you calculate new values:</p>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>+ addition (gain gold)</li>
            <li>- subtraction (lose health)</li>
            <li>* multiplication (strong attack bonus)</li>
            <li>/ division (splitting loot evenly)</li>
          </ul>

          <p className="text-lg mt-4">Comparison operators let your code ask questions about numbers:</p>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>&gt; greater than</li>
            <li>&lt; less than</li>
            <li>&gt;= greater than or equal</li>
            <li>&lt;= less than or equal</li>
            <li>== equal</li>
            <li>!= not equal</li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why This Math Matters
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Game Logic:</strong> Decide who wins
              a battle, if a door opens, or if a score beats a high score.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Progress Tracking:</strong> XP,
              levels, time remaining, and more all rely on numbers.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Conditionals & Loops:</strong> Most
              if statements and loops use comparisons behind the scenes.
            </li>
          </ul>
          <p className="text-lg">
            Without this math, your programs would just show text and never “understand” anything.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Basic calculations
gold = 10 + 5       // 15
health = 100 - 20   // 80

// Comparisons
if health <= 0 then
  Display: "You have fallen..."
end

if gold >= 100 then
  Display: "You can buy the legendary sword!"
end`}</code>
          </pre>

          <p className="text-lg">
            You’re teaching your code how to calculate and compare—the core of logical decision making.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        <Quiz quizData={mathQuiz}></Quiz>
      </article>
    </div>
  );
}
