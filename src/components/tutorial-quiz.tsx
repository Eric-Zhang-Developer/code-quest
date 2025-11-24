"use client";

import { Cinzel } from "next/font/google";
import { useState } from "react";
import { QuizData } from "@/lib/types/types";
import { createClient } from "@/lib/supabase/client";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });

type QuizProps = {
  quizData: QuizData;
};

export default function Quiz({ quizData }: QuizProps) {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData.questions[questionNumber];

  const handleOptionClick = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);

    // 1. Check Correctness
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    // 2. Update Score
    if (correct) {
      setScore((prev) => prev + 1);
    }

    // 3. Auto-advance timer
    setTimeout(() => {
      const nextIndex = questionNumber + 1;

      if (nextIndex < quizData.questions.length) {
        setQuestionNumber(nextIndex);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResults(true);
        updateUserQuizProgress();
      }
    }, 2000); // 2 second delay so they can read the feedback
  };

  const resetQuiz = () => {
    setQuestionNumber(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  // Updates database that user completed quiz, no score to keep things simple
  // TODO: Update the insert with a upsert, and keep track of the user's most recent score on quiz
  // Also another neat feature would be loading the quiz result instead of resetting the quiz each time
  const updateUserQuizProgress = async () => {
    const supabase = createClient();

    // Get user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error("User not logged in, cannot save progress.");
      return;
    }

    const { error: insertError } = await supabase.from("user_quiz_progress").insert({
      user_id: user.id,
      quiz_id: quizData.id,
    });

    if (insertError) {
      console.error(`Supabase insertion error: ${insertError}`);
    }
  };

  return (
    <div className="mt-12 p-8 border-2 border-amber-800/50 rounded-xl bg-amber-50/50 shadow-inner shadow-amber-900/20">
      <h2 className={`text-3xl font-bold text-center mb-6 text-amber-900 ${cinzel.className}`}>
        {quizData.title}
      </h2>

      {showResults ? (
        <div className="text-center space-y-6 animate-fade-in">
          {/* Results */}
          <p className="text-2xl text-amber-950">Quest Complete!</p>
          <p className="text-xl">
            You scored <span className="font-bold">{score}</span> out of{" "}
            <span className="font-bold">{quizData.questions.length}</span>
          </p>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-amber-900 text-amber-100 font-bold rounded-lg hover:bg-amber-800 border-2 border-amber-950"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Score Tracker Display */}
          <div className="flex justify-between text-amber-800 font-serif italic">
            <span>
              Question {questionNumber + 1} of {quizData.questions.length}
            </span>
            <span>Score: {score}</span>
          </div>

          <div className="bg-amber-200/50 p-6 rounded-lg border border-amber-800/30">
            <h3 className="text-xl font-semibold text-amber-950 mb-4">
              {currentQuestion.questionText}
            </h3>

            <div className="grid gap-3">
              {currentQuestion.options.map((option) => {
                let buttonStyle = "bg-white hover:bg-amber-100 border-amber-300 text-amber-900";

                if (selectedOption === option) {
                  buttonStyle = isCorrect
                    ? "bg-green-200 border-green-500 text-green-900 font-bold"
                    : "bg-red-200 border-red-500 text-red-900 font-bold";
                } else if (selectedOption && option === currentQuestion.correctAnswer) {
                  buttonStyle = "bg-green-100 border-green-300 text-green-800 opacity-75";
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left p-4 rounded border-2 transition-all ${buttonStyle} ${
                      selectedOption === null ? "hover:translate-x-1" : ""
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
