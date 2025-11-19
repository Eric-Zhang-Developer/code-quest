import { Cinzel } from "next/font/google";
import { useState } from "react";
import { helloWorldQuiz } from "@/data/quizzes/01-hello-world";
const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });
export default function TutorialQuiz() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const currentQuestion = helloWorldQuiz.questions[questionNumber];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    // Prevent clicking if already selected
    if (selectedOption) return;

    setSelectedOption(option);

    // Check answer
    let correct = null;
    if (option === currentQuestion.correctAnswer) {
      correct = true;
    } else {
      correct = false;
    }
    setIsCorrect(correct);
  };

  return (
    <div className="mt-12 p-8 border-2 border-amber-800/50 rounded-xl bg-amber-50/50 shadow-inner shadow-amber-900/20">
      <h2 className={`text-3xl font-bold text-center mb-6 text-amber-900 ${cinzel.className}`}>
        Test Your Knowledge, Initiate
      </h2>

      {/* Question Card */}
      <div className="space-y-6">
        <div className="bg-amber-200/50 p-6 rounded-lg border border-amber-800/30">
          {/* Question */}
          <h3 className="text-xl font-semibold text-amber-950 mb-4">
            {currentQuestion.questionText}
          </h3>

          {/* Choices */}
          <div className="grid gap-3">
            {currentQuestion.options.map((option) => {
              // Dynamic Styling Logic ( This is soo cool)
              let buttonStyle = "bg-white hover:bg-amber-100 border-amber-300 text-amber-900";

              if (selectedOption === option) {
                if (isCorrect) {
                  buttonStyle = "bg-green-200 border-green-500 text-green-900 font-bold";
                } else {
                  buttonStyle = "bg-red-200 border-red-500 text-red-900 font-bold";
                }
              } else if (selectedOption && option === currentQuestion.correctAnswer) {
                // Highlight the correct answer if they got it wrong
                buttonStyle = "bg-green-100 border-green-300 text-green-800 opacity-75";
              }

              return (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null} // Disables all buttons after selection
                  className={`w-full text-left p-4 rounded border-2 transition-all hover:cursor-pointer ${buttonStyle} ${
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
    </div>
  );
}
