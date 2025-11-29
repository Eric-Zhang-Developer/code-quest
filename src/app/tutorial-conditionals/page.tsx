"use client";

import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { conditionalsQuiz } from "@/data/quizzes/04-conditionals";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

export default function TutorialConditionals() {
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
          Quest: The Forking Path – Choosing Fate with If and Else
        </h1>

        <p className="text-xl italic text-amber-900">
          Every adventure has moments of choice: fight or flee, open the chest or walk away.
          In code, those decisions are made with <strong>conditionals</strong>—the <strong>if</strong> 
          and <strong>else</strong> spells that tell your program which path to follow.
        </p>

        <p className="text-lg">
          This quest teaches your code the power to decide, not just blindly follow one script.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Are Conditionals?
          </h2>
          <p className="text-lg">
            A conditional is a question about the world that leads to different outcomes. It looks like:
          </p>
          <p className="text-lg font-mono bg-amber-200 px-2 py-1 rounded border border-amber-800">
            "If this condition is true, do A; otherwise, do B."
          </p>
          <p className="text-lg">
            The condition is usually a comparison—like checking if <strong>health ≤ 0</strong> 
            or if <strong>gold &gt; 100</strong>. True or false determines which branch of the story runs.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why These Choices Matter
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Logic:</strong> Real programs rarely do the same thing every time. They react.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Safety:</strong> You can prevent bad actions, e.g., "Only open the gate if the password is correct."
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Complexity:</strong> By chaining conditions, you can describe rich behavior without writing separate programs.
            </li>
          </ul>
          <p className="text-lg">
            Conditionals are the difference between a straight hallway and a branching dungeon.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Check the hero's health
if health <= 0 then
  Display: "You have fallen in battle..."
else
  Display: "You still stand! Prepare your next move."
end`}</code>
          </pre>

          <p className="text-lg">
            The program examines a condition and chooses which message to reveal, like a dungeon master reacting to the dice.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Quiz */}
        <Quiz quizData={conditionalsQuiz}></Quiz>
      </article>
    </div>
  );
}
