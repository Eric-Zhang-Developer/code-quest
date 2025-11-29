"use client";

// Imports
import React from "react";
import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { recursionQuiz } from "@/data/quizzes/10-recursion";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

// Main page
export default function TutorialRecursion() {
  return (
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
          Quest: The Hall of Mirrors – Solving Problems with Recursion
        </h1>

        <p className="text-xl italic text-amber-900">
          Imagine a spell that calls itself—a mirror reflecting another mirror, stretching into infinity. That’s recursion: a function that solves a big problem by solving smaller versions of the same problem.
        </p>
        <p className="text-lg">
          In this quest, you’ll learn how to think recursively, breaking complex tasks into tiny, repeated steps.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Is Recursion?
          </h2>
          <p className="text-lg">
            A recursive function is a function that calls itself. Every recursive spell has two critical parts:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg pl-4">
            <li>
              <strong>Base case:</strong> The simplest situation where you can give an answer directly (no more recursion).
            </li>
            <li>
              <strong>Recursive case:</strong> The part where the function calls itself with a smaller/simpler input.
            </li>
          </ul>
          <p className="text-lg mt-2">
            The function keeps calling itself, shrinking the problem each time, until it reaches the base case.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why the Hall of Mirrors Matters
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Elegant Solutions:</strong> Some problems (like tree structures, nested folders, or divide-and-conquer algorithms) are easier to describe recursively.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Pattern Recognition:</strong> Recursion trains your brain to see “big problem = smaller copies of itself.”
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Foundation for Advanced Topics:</strong> Many algorithms in CS (searching trees, sorting, backtracking) rely heavily on recursion.
            </li>
          </ul>
          <p className="text-lg mt-2">
            Without a solid sense of recursion, a lot of later CS content feels like black magic.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>
          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Example: Sum of numbers from 1 to n
function sumTo(n)
    // Base case: smallest, simplest version
    if n == 1 then
        return 1
    end

    // Recursive case: use a smaller version of the same problem
    // sumTo(n) = n + sumTo(n - 1)
    return n + sumTo(n - 1)
end

result = sumTo(4)   // 4 + 3 + 2 + 1 = 10

// The base case stops the spell (n == 1)
// Each call reduces n by 1, getting closer to that base case
// The answers “bubble back up” as the calls return
// Think of it like descending a staircase one step at a time, then climbing back up with all the collected results.`}</code>
          </pre>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Quiz */}
        <Quiz quizData={recursionQuiz}></Quiz>
      </article>
    </div>
  );
}
