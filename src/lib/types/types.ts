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

export type Profile = {
  id: string;
  class: string;
  created_at: string;
  updated_at: string;
};
