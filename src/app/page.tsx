"use client";

import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";

//font for words
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function LandingPage() {
  return (
    //setting background to desired image
    <main
      className="relative min-h-dvh flex flex-col items-center justify-center px-8 
                 bg-[url('/gemininight3.png')] bg-cover bg-center bg-no-repeat text-white overflow-hidden
                 "
    >
      {/*welcome text*/}
      <div className="relative z-10 max-w-xl text-center">
        <h1
          className={`${cinzel.className} text-5xl md:text-6xl font-bold text-indigo-200 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)] mb-4`}
        >
          Welcome to
        </h1>

        {/*all dark grey logo*/}
        <div className="relative w-[auto] h-[auto]">
          <Image
            src="/codequestAllDark.png"
            alt="CodeQuest Logo"
            width={400}
            height={120}
            className="object-center scale-125"
            //add in shadow for it to pop on dark background
            style={{
              filter: `
                drop-shadow(0 0 10px #a5f3fc)
                drop-shadow(0 0 20px #93c5fd)
                drop-shadow(0 0 30px #60a5fa)
              `,
            }}
          />
        </div>

        {/* start button*/}
        <div className="mt-2 flex items-center justify-center gap-3">
          <Link
            href="/dashboard"
            //make it glow pulsing to show that it is clickable to new users
            //also becomes bigger and more vibrant when the mouse hovers over
            className={`${cinzel.className} text-lg px-8 py-3 rounded-full shadow-lg transition-transform duration-500 hover:scale-105
                        bg-indigo-500 hover:bg-indigo-600 font-semibold text-white
                        animate-pulse hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]`}
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </main>
  );
}
