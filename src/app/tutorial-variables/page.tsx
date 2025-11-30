"use client";

import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { variablesQuiz } from "@/data/quizzes/02-variables";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bodyFontClass = "font-serif text-amber-950";
const cinzelTitleClass = cinzel.className;

export default function TutorialVariables() {
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
        <h1
          className={`text-4xl md:text-5xl font-bold ${cinzelTitleClass}
                      border-b-4 border-amber-900 pb-4 mb-8 text-center uppercase`}
        >
          Quest: The Artisan&apos;s Toolkit – Mastering the Variable Vaults
        </h1>

        <p className="text-xl italic text-amber-900">
          Welcome back, brave coder! Having successfully performed the first incantation,{" "}
          <strong className="font-extrabold text-amber-950">&quot;Hello World&quot;</strong>, you proved you
          can command the machine. Now your journey deepens. To build living, breathing digital
          worlds, you must learn to store and change the information that powers them. This is the
          Variable Quest.
        </p>
        <p className="text-lg">
          Prepare to open your first enchanted pouches and craft the tools that will shape your
          future spells.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* SECTION */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What is a Variable?
          </h2>
          <p className="text-lg">
            A <strong>variable</strong> is a labeled container that stores information your program
            needs to remember.  
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">The Name:</strong> This is the label,
              like{" "}
              <code className="bg-amber-200 px-1 rounded border border-amber-800 font-mono">
                Player_Health
              </code>
              .
            </li>
            <li>
              <strong className="font-semibold text-amber-950">The Value:</strong> What&apos;s stored
              inside—such as <em>100</em>, <em>&quot;Alex&quot;</em>, or <em>15</em>.
            </li>
          </ul>

          <p className="text-lg">
            Variables can change over time as your program runs, which is why they&apos;re called
            <em> variables</em>.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* SECTION */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why Variables Matter
          </h2>

          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Storing Information:</strong> Games
              and programs need to remember things like scores or character stats.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Flexibility:</strong> You can update
              a variable’s value without rewriting your program.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Interactivity:</strong> Your code can
              respond to changes—like taking damage or gaining coins.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* SECTION */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visual Example
          </h2>

          <p className="text-lg">
            Creating a variable usually involves two steps: naming it and assigning a value.
          </p>

          <p className="text-lg">Example:</p>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Create a variable named Player_Health
// Give it a starting value of 100

Player_Health = 100`}</code>
          </pre>

          <p className="text-lg">
            When something changes—for example, the player takes damage—you update the value:
          </p>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Reduce Player_Health after taking damage

Player_Health = 80`}</code>
          </pre>

          <p className="text-lg">
            Variables allow your program to keep track of data as the story unfolds.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        <Quiz quizData={variablesQuiz}></Quiz>
      </article>
    </div>
  );
}

