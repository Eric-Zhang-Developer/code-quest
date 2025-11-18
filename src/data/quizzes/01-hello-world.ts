import { QuizData } from "@/lib/types/types";

export const helloWorldQuiz: QuizData = {
  title: "The Oracle's First Greeting",
  questions: [
    {
      questionText: "What is the primary purpose of a 'Hello World' program?",
      options: [
        "To summon a digital dragon",
        "To verify that your coding environment is set up correctly",
        "To hack into the mainframe",
        "To write a poem for the computer",
      ],
      correctAnswer: "To verify that your coding environment is set up correctly",
    },
    {
      questionText:
        "True or False: 'Hello World' is only used in one specific programming language.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      questionText: "Which of the following is a common command to display text?",
      options: ["print", "shout", "whisper", "cast_spell"],
      correctAnswer: "print",
    },
  ],
};
