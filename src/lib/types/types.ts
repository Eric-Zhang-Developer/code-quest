export type Question = {
  questionText: string;
  options: string[];
  correctAnswer: string;
};

export type QuizData = {
  title: string;
  questions: Question[];
};
