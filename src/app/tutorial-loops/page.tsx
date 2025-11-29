"use client";

import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { loopsQuiz } from "@/data/quizzes/05-loops";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body text (Times New Roman = more readable)
const bodyFontClass = "font-serif text-amber-950";
// titles (Cinzel font)
const cinzelTitleClass = cinzel.className;

export default function TutorialLoops() {
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
          Quest: The Time Mage’s Circle – Repeating Actions with Loops
        </h1>

        <p className="text-xl italic text-amber-900">
          Sometimes you must perform the same action again and again: marching across tiles, 
          checking many items, or attacking until the enemy falls. Casting the same spell manually is tedious; instead, you use a <strong>loop</strong>.
        </p>

        <p className="text-lg">
          This quest teaches how to control repetition—making the computer do something many times without rewriting the same line of code.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What Are Loops?
          </h2>
          <p className="text-lg">
            A loop is a magical circle your program walks around repeatedly. Each lap through the circle is called an iteration.
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>“Repeat this exact number of times.”</li>
            <li>“Keep repeating while this condition is true.”</li>
          </ul>
          <p className="text-lg">
            As long as the loop’s condition says “continue,” the program goes around again. When the condition fails, the circle breaks and the spell moves on.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why Circles of Time Matter
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">Efficiency:</strong> Write an action once, run it hundreds or thousands of times.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Scalability:</strong> Your code can handle 10 items or 10,000 with the same loop.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">Structure:</strong> Many tasks—processing lists, animating frames, simulating steps—are naturally loop-shaped.
            </li>
          </ul>
          <p className="text-lg">
            Without loops, you’d be copy-pasting the same code over and over like a scribe doomed to rewrite the same line.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>

          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Count down from 5 to 1
counter = 5
while counter > 0 do
  Display: counter
  counter = counter - 1
end
Display: "Go!"`}</code>
          </pre>

          <p className="text-lg">
            until the condition (<code className="font-mono bg-amber-200 px-1 rounded border border-amber-800">counter &gt; 0</code>) is no longer true.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* Quiz */}
        <Quiz quizData={loopsQuiz}></Quiz>
      </article>
    </div>
  );
}
