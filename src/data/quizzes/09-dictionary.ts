import { QuizData } from "@/lib/types/types";

export const dictionaryQuiz: QuizData = {
  title: "The Archivist’s Lexicon",
  id: "dictionary",
  questions: [
    {
      questionText: "What is a dictionary in programming?",
      options: [
        "A list of items in order",
        "A key → value storage structure",
        "A magical spellbook",
        "A type of loop",
      ],
      correctAnswer: "A key → value storage structure",
    },
    {
      questionText: "True or False: Keys in a dictionary must be unique.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "What happens if you access a key that does not exist?",
      options: [
        "Your computer catches fire",
        "You get an error",
        "It returns a random value",
        "It creates a new key automatically",
      ],
      correctAnswer: "You get an error",
    },
    {
      questionText: "Which of the following is a valid dictionary operation?",
      options: [
        "stats[\"health\"] = 120",
        "stats ++ 5",
        "stats -> level up",
        "stats.cast()",
      ],
      correctAnswer: "stats[\"health\"] = 120",
    },
    {
      questionText: "What type of information can dictionary values hold?",
      options: ["Only numbers", "Only strings", "Anything", "Only lists"],
      correctAnswer: "Anything",
    },
  ],
};
