export type Question = {
  questionText: string;
  options: string[];
  correctAnswer: string;
};

export type QuizData = {
  title: string;
  id: string;
  questions: Question[];
};
