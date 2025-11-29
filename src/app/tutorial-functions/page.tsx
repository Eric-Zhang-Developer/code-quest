"use client";

// Imports
import React from "react";
import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { functionsQuiz } from "@/data/quizzes/07-functions";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

// Main page
export default function TutorialFunctions() {
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
          Quest: The Summoner’s Sigil – Crafting Reusable Spells (Functions)
        </h1>

        <p className="text-xl italic text-amber-900">
          As your spellbook grows, your rituals become powerful—but also messy. Instead of rewriting
          the same incantation in twenty places, you craft a function: a named spell you can summon
          whenever you need it.
        </p>

        <p className="text-lg">
          This quest teaches you how to bundle logic into reusable pieces, keeping your code clean,
          organized, and easier to upgrade as your powers grow.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Are Functions?
          </h2>

          <p className="text-lg">
            A function is a named mini-program. It can:
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg pl-4">
            <li>
              Take in ingredients (<strong>parameters</strong>)
            </li>
            <li>
              Perform a sequence of steps
            </li>
            <li>
              Return a result (<strong>return value</strong>) back to the caller
            </li>
          </ul>

          <p className="text-lg mt-4">
            You define the function once, then call it from many places—just like using the same
            summoning circle in different battles.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why Summoner’s Sigils Matter
          </h2>

          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Reuse:</strong> Write code once, use
              it everywhere.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Clarity:</strong> Give complicated
              logic a clear name like <em>calculateDamage</em> or <em>spawnEnemy</em>.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Maintenance:</strong> Fix a bug in
              ONE function instead of hunting down 15 duplicated copies.
            </li>
          </ul>

          <p className="text-lg mt-2">
            Functions are how large programs stay understandable rather than turning into a tangled
            incantation.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          {/* SAFE VERSION — no risky backticks */}
          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>
{`// Define a spell that calculates damage
function calculateDamage(attackPower, enemyDefense)
  damage = attackPower - enemyDefense
  if damage < 0 then
    damage = 0
  end
  return damage
end

// Use (call) the spell
hit = calculateDamage(20, 5)
Display: "You dealt " .. hit .. " damage!"`}
            </code>
          </pre>

          <p className="text-lg mt-2">
            You’ve taught the machine a new word of power (<em>calculateDamage</em>) that bundles a
            whole mini-ritual into a single summonable spell.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Quiz */}
        <Quiz quizData={functionsQuiz}></Quiz>
      </article>
    </div>
  );
}
