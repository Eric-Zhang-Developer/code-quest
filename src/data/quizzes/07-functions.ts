import { QuizData } from "@/lib/types/types";

export const functionsQuiz: QuizData = {
  title: "The Summoner’s Sigil",
  id: "functions",
  questions: [
    {
      questionText: "What is the primary purpose of a function?",
      options: [
        "To summon a literal fireball",
        "To bundle logic into a reusable mini-program",
        "To rename your variables into cooler wizard names",
        "To decorate your code with fancy symbols",
      ],
      correctAnswer: "To bundle logic into a reusable mini-program",
    },
    {
      questionText: "True or False: A function can take inputs called parameters.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "What do we call the value a function sends back when it finishes?",
      options: ["A prophecy", "A return value", "A mana refund", "A summoned echo"],
      correctAnswer: "A return value",
    },
    {
      questionText:
        "In the quest’s example, what does the calculateDamage function do when damage would be negative?",
      options: [
        "It summons a dragon instead",
        "It sets the damage to 0",
        "It doubles the attack power",
        "It ends the battle immediately",
      ],
      correctAnswer: "It sets the damage to 0",
    },
    {
      questionText:
        "Which analogy best describes calling a function?",
      options: [
        "Opening a treasure chest without a key",
        "Using the same summoning circle in different battles",
        "Chasing a goblin through a maze",
        "Throwing a random potion into the wind",
      ],
      correctAnswer: "Using the same summoning circle in different battles",
    },
    {
      questionText:
        "Which of these is NOT a benefit of using functions?",
      options: [
        "Reusing code in multiple places",
        "Organizing complex logic behind a clear name",
        "Fixing bugs in one place instead of many",
        "Forcing your program to run slower",
      ],
      correctAnswer: "Forcing your program to run slower",
    },
    {
      questionText:
        "What is a parameter?",
      options: [
        "A magical tattoo of power",
        "An ingredient you pass into a function",
        "The final result of a spell",
        "A type of forbidden enchantment",
      ],
      correctAnswer: "An ingredient you pass into a function",
    },
    {
      questionText:
        "True or False: You must rewrite a function every time you want to use it.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
  ],
};
