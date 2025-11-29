import { QuizData } from "@/lib/types/types";

export const loopsQuiz: QuizData = {
  title: "The Time Mage’s Circle – Repeating Actions with Loops",
  id: "loops",
  questions: [
    {
      questionText: "What is the purpose of a loop in programming?",
      options: [
        "To perform the same action multiple times automatically",
        "To delete all variables",
        "To check a condition only once",
        "To display text only once",
      ],
      correctAnswer: "To perform the same action multiple times automatically",
    },
    {
      questionText: "Which of these is an example of a loop?",
      options: [
        "while counter > 0 do Display: counter",
        "if health <= 0 then Display: 'You have fallen...'",
        "Character_Name = input('Enter name')",
        "Display: 'Hello World!'",
      ],
      correctAnswer: "while counter > 0 do Display: counter",
    },
    {
      questionText: "What is an iteration in the context of loops?",
      options: [
        "A single pass through the loop",
        "The end of the program",
        "A type of conditional",
        "A variable declaration",
      ],
      correctAnswer: "A single pass through the loop",
    },
    {
      questionText: "True or False: Loops can handle thousands of repetitions efficiently.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "Why are loops important for programming?",
      options: [
        "They save effort by repeating actions without rewriting code",
        "They automatically debug your code",
        "They make the program invisible",
        "They prevent all runtime errors",
      ],
      correctAnswer: "They save effort by repeating actions without rewriting code",
    },
    {
      questionText: "Which analogy was used to describe loops in the tutorial?",
      options: [
        "Magical circle/time mage",
        "Straight hallway vs. branching dungeon",
        "Hello World greeting",
        "Scribe rewriting lines",
      ],
      correctAnswer: "Magical circle/time mage",
    },
  ],
};
