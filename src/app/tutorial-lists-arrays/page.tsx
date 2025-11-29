"use client";

// Imports
import React from "react";
import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { listsArraysQuiz } from "@/data/quizzes/08-lists-arrays";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

// Main page
export default function TutorialListsArrays() {
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
          Quest: The Adventurer’s Pack – Lists & Arrays
        </h1>

        <p className="text-xl italic text-amber-900">
          A hero rarely carries just one item. Your backpack—like a list or array—lets you store
          many values together and access them whenever you need.
        </p>

        <p className="text-lg">
          In this quest, you’ll learn how to group related data, access items by index, modify the
          contents, and loop through them efficiently.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Are Lists/Arrays?
          </h2>

          <p className="text-lg">
            A list (or array) is a sequence of values stored in order. Each value has a position,
            starting at index <strong>0</strong>.
          </p>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`inventory[0] → "Sword"
inventory[1] → "Shield"
inventory[2] → "Health Potion"`}</code>
          </pre>

          <p className="text-lg">Using a list/array, you can:</p>

          <ul className="list-disc list-inside space-y-2 text-lg pl-4">
            <li>Add items</li>
            <li>Read items</li>
            <li>Change items</li>
            <li>Loop through all items</li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why Adventurer’s Packs Matter
          </h2>

          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="text-amber-950">Organization:</strong> Keep related items
              together—inventory, enemies, scores, waypoints.
            </li>
            <li>
              <strong className="text-amber-950">Scalability:</strong> A list can hold 3 or 300
              items without changing your code structure.
            </li>
            <li>
              <strong className="text-amber-950">Loops + Lists = Power:</strong> Process each item
              easily, like checking enemies or displaying a leaderboard.
            </li>
          </ul>

          <p className="text-lg mt-2">
            Without lists, you’d need a new variable for every item (item1, item2, item3…), which
            becomes unmanageable quickly.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`inventory = ["Sword", "Shield", "Health Potion"]

// Access a single item
firstItem = inventory[0]          // "Sword"

// Change an item
inventory[2] = "Mega Health Potion"

// Loop over the whole pack
i = 0
while i < length(inventory) do
    Display: "Slot " + i + ": " + inventory[i]
    i = i + 1
end`}</code>
          </pre>

          <p className="text-lg mt-2">
            Your list is like a row of enchanted slots—and the index chooses which item you’re
            interacting with.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Quiz */}
        <Quiz quizData={listsArraysQuiz}></Quiz>
      </article>
    </div>
  );
}
