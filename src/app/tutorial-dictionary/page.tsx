"use client";

// Imports
import React from "react";
import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { dictionaryQuiz } from "@/data/quizzes/09-dictionary";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text
const bodyFontClass = "font-serif text-amber-950";
// titles
const cinzelTitleClass = cinzel.className;

// Main page
export default function TutorialDictionary() {
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

      {/* scroll */}
      <article
        className={`max-w-4xl mx-auto bg-amber-100 p-8 md:p-12 shadow-2xl shadow-amber-950/70 
        space-y-8 ${bodyFontClass} border border-amber-800 transform rotate-[-0.5deg]
        rounded-t-[4rem] rounded-b-lg`}
      >
        {/* title */}
        <h1
          className={`text-4xl md:text-5xl font-bold ${cinzelTitleClass}
            border-b-4 border-amber-900 pb-4 mb-8 text-center uppercase`}
        >
          Quest: The Rune Ledger – Storing Secrets with Dictionaries
        </h1>

        <p className="text-xl italic text-amber-900">
          Sometimes you don’t want to look things up by number; you want to look them up by name. 
          A dictionary (also called a map or hash map) is a magical ledger that links keys to values—like a book that tells you “For ‘health’, the value is 100.”
        </p>

        <p className="text-lg mt-2">
          In this quest, you’ll learn to store and retrieve data using meaningful keys instead of just positions.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Are Dictionaries?
          </h2>

          <p className="text-lg">
            A dictionary is a collection of <strong>key → value</strong> pairs.
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg pl-4">
            <li>
              <strong>Key:</strong> the label (like &quot;health&quot;, &quot;name&quot;, &quot;attackPower&quot;)
            </li>
            <li>
              <strong>Value:</strong> the data tied to that label (like 100, &quot;Astra&quot;, 25)
            </li>
            <li>
              You use the key to get the value, just like looking up a word in a real dictionary.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why Rune Ledgers Matter
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Clarity:</strong> &quot;health&quot; is more readable than stats[0].
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Flexibility:</strong> You can add and remove keys without worrying about numeric positions.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Modeling Objects:</strong> Dictionaries are great for representing things like players, enemies, settings, or items with many attributes.
            </li>
            <li>
              Dictionaries make your data self-describing, which keeps large programs understandable.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 
          border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`enemy = {
    "name": "Goblin",
    "health": 40,
    "attack": 7
}

// Read values by key
Display: enemy["name"]           // "Goblin"

// Change a value
enemy["health"] = enemy["health"] - 10

// Add a new key
enemy["loot"] = "Rusty Dagger"

// Instead of saying “check index 1”, you say “check health,” which reads more like a story.`}</code>
          </pre>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Quiz */}
        <Quiz quizData={dictionaryQuiz}></Quiz>
      </article>
    </div>
  );
}
