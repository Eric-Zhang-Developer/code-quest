import { Cinzel } from "next/font/google";
import { useState } from "react";
import { helloWorldQuiz } from "@/data/quizzes/01-hello-world";
const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });
export default function TutorialQuiz() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const currentQuestion = helloWorldQuiz.questions[questionNumber];

  return (
    <div className="mt-12 p-8 border-2 border-amber-800/50 rounded-xl bg-amber-50/50 shadow-inner shadow-amber-900/20">
      <h2 className={`text-3xl font-bold text-center mb-6 text-amber-900 ${cinzel.className}`}>
        Test Your Knowledge, Initiate
      </h2>

      {/* Question Card */}
      <div className="space-y-6">
        <div className="bg-amber-200/50 p-6 rounded-lg border border-amber-800/30">
          <h3 className="text-xl font-semibold text-amber-950 mb-4">
            {currentQuestion.questionText}
          </h3>
        </div>
      </div>
    </div>
  );
}
