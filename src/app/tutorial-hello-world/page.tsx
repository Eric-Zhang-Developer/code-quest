"use client";

import BackToDashBoardLink from "@/components/back-to-dashboard-link";
import YouTube from "react-youtube";
import Quiz from "@/components/tutorial-quiz";

import { Cinzel } from "next/font/google";
import { helloWorldQuiz } from "@/data/quizzes/01-hello-world";

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
          Quest: The Oracle&apos;s First Greeting
        </h1>

        <p className="text-xl italic text-amber-900">
          Welcome, brave coder! Your journey into the mystical lands of programming begins now.
          Before you can conjure complex spells or build mighty digital fortresses, every adventurer
          must learn the first incantation, the universal greeting recognized across all realms:{" "}
          <strong className="font-extrabold text-amber-950">&quot;Hello World&quot;</strong>. This
          simple phrase is your key to unlocking the power of code.
        </p>
        <p className="text-lg">
          This quest will guide you through understanding and wielding this fundamental magic.
        </p>

        <hr className="my-8 border-amber-900/50" />

        {/* section*/}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            What is this &quot;Hello World&quot; Sorcery?
          </h2>
          <p className="text-lg">
            In the ancient scrolls of programming, &quot;Hello World&quot; is the traditional first
            spell learned. What does it do? It simply commands the machine - your loyal golem - to
            display the message{" "}
            <code className="bg-amber-200 px-1 rounded text-amber-950 font-mono border border-amber-800">
              &quot;Hello World!&quot;
            </code>{" "}
            on the screen.
          </p>
          <p className="text-lg">
            Think of it like teaching a parrot its first words. You&apos;re not asking it to recite
            poetry yet, just to say &quot;Hello!&quot; It&apos;s the basic proof that you can
            communicate your intentions to the machine and make it respond.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section */}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Why This First Greeting Matters
          </h2>
          <p className="text-lg">Why start with something so simple?</p>
          <ul className="list-disc list-inside space-y-3 text-lg pl-4">
            <li>
              <strong className="font-semibold text-amber-950">It&apos;s Tradition:</strong> Like a
              knight receiving their first sword, programmers worldwide start here. It connects you
              to generations of coders before you!
            </li>
            <li>
              <strong className="font-semibold text-amber-950">It&apos;s a Test:</strong>{" "}
              Successfully making the machine say &quot;Hello World&quot; proves your basic setup is
              working. Your coding environment, the language you&apos;re using - they&apos;re all
              aligned and ready for more complex commands. It&apos;s like checking if your magic
              wand sparks before trying to levitate a mountain.
            </li>
            <li>
              <strong className="font-semibold text-amber-950">It&apos;s Confidence:</strong> Seeing
              your very first command come to life, even a simple one, is a powerful boost!
              It&apos;s the first step on your epic journey.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-amber-900/50" />

        {/* section*/}
        <section className="space-y-4">
          <h2 className={`text-3xl font-semibold ${cinzelTitleClass}`}>
            Visualizing the Incantation (Conceptual Example)
          </h2>
          <p className="text-lg">
            Imagine you have a magical scroll (your program). To perform the &quot;Hello World&quot;
            greeting, you&apos;d write an instruction similar to this:
          </p>
          <pre className="bg-amber-200 p-6 rounded-md font-mono text-sm text-amber-950 border-2 border-amber-800/50 overflow-x-auto shadow-inner shadow-amber-900/30">
            <code>{`// Command the Oracle (or Screen) to speak:\nDisplay: "Hello World!"`}</code>
          </pre>
          <p className="text-lg">
            Different programming languages (spellbooks) have slightly different words for the
            &apos;Display&apos; command (like{" "}
            <code className="bg-amber-200 px-1 rounded text-amber-950 font-mono border border-amber-800">
              print
            </code>
            ,{" "}
            <code className="bg-amber-200 px-1 rounded text-amber-950 font-mono border border-amber-800">
              console.log
            </code>
            ,{" "}
            <code className="bg-amber-200 px-1 rounded text-amber-950 font-mono border border-amber-800">
              echo
            </code>
            ), but the core idea is the same: tell the machine to show those exact words.
          </p>
        </section>

        <hr className="my-8 border-amber-900/50" />

        <YouTube videoId="hp4pYFASTrc"></YouTube>

        <Quiz quizData={helloWorldQuiz}></Quiz>
      </article>
    </div>
  );
}
