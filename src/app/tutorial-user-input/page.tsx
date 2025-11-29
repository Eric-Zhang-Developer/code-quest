"use client";

import React from "react";
import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { userInputQuiz } from "@/data/quizzes/03-user-input";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

export default function TutorialUserInput() {
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

      {/* Scroll */}
      <article
        className={`max-w-4xl mx-auto bg-amber-100 p-8 md:p-12 shadow-2xl shadow-amber-950/70 space-y-8 
                          ${bodyFontClass} border border-amber-800 transform rotate-[-0.5deg] 
                          rounded-t-[4rem] rounded-b-lg`}
      >
        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl font-bold ${cinzelTitleClass} 
                        border-b-4 border-amber-900 pb-4 mb-8 text-center uppercase`}
        >
          Quest: The Scribe&apos;s Listening Ear
        </h1>

        <p className="text-xl italic text-amber-900">
          Brave coder! You've mastered the greeting (<strong>Hello World</strong>) and learned to
          command the power of <strong>Variables</strong>. But a true digital fortress does not only
          speak… it listens.
        </p>

        <p className="text-lg">
          This quest teaches you the sacred art of <strong>User Input</strong> — the magic that
          allows your program to pause, listen, and capture whatever the adventurer at the keyboard
          types.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Is the Scribe&apos;s Listening Ear?
          </h2>
          <p className="text-lg">
            User Input is the spell that makes your program halt its actions, wait patiently, and
            record what the user types. It acts like a listening shell held out by the program,
            signaling it is ready to receive a message.
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>Pauses the program</li>
            <li>Waits for the user to type text</li>
            <li>Captures that text</li>
            <li>Stores it instantly in a Variable Pouch</li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why Capturing Input Matters
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Personalized Experience:</strong>{" "}
              Programs can ask for your name and respond uniquely.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Dynamic Choices:</strong> User input
              lets adventurers choose paths, options, or actions.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Bridge to Variables:</strong> The
              value typed is immediately stored in a variable and can be reused anywhere.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          <p className="text-lg">
            Here is the Python spell for capturing user input — it asks a question and listens for
            the answer:
          </p>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`# The command asks the question and listens for the answer.
Character_Name = input("What name shall be etched onto your armor?")`}</code>
          </pre>

          <p className="text-lg">
            If the user types <strong>"Kaelen"</strong> and presses Enter, the value{" "}
            <code className="font-mono bg-amber-200 px-1 rounded border border-amber-800">
              "Kaelen"
            </code>{" "}
            is instantly sealed into the variable <strong>Character_Name</strong>.
          </p>

          <p className="text-lg">
            You can then use it right away to create personalized responses:
          </p>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`print("Welcome, " + Character_Name + "! Your quest begins.")`}</code>
          </pre>
        </section>

        <hr className="my-8 border-amber-900/50" />

        <Quiz quizData={userInputQuiz}></Quiz>
      </article>
    </div>
  );
}
