import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });
export default function TutorialQuiz() {
  return (
    <div className="mt-12 p-8 border-2 border-amber-800/50 rounded-xl bg-amber-50/50 shadow-inner shadow-amber-900/20">
      <h2 className={`text-3xl font-bold text-center mb-6 text-amber-900 ${cinzel.className}`}>
        Test Your Knowledge, Initiate
      </h2>
    </div>
  );
}
