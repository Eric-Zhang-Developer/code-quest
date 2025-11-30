import { QuizData } from "@/lib/types/types";

export const recursionQuiz: QuizData = {
  title: "The Infinity Maze – Recursion",
  id: "recursion",
  questions: [
    {
      questionText: "What is recursion?",
      options: [
        "A loop that never ends",
        "A function calling itself",
        "A type of magical potion",
        "A way to combine two variables",
      ],
      correctAnswer: "A function calling itself",
    },
    {
      questionText: "What must every recursive function have?",
      options: [
        "Two loops and a return statement",
        "A base case",
        "A global variable",
        "A random number generator",
      ],
      correctAnswer: "A base case",
    },
    {
      questionText: "Which example best represents recursion?",
      options: [
        "Opening a series of nested boxes",
        "Walking in a straight line",
        "Sorting items alphabetically by hand",
        "Casting a spell once",
      ],
      correctAnswer: "Opening a series of nested boxes",
    },
    {
      questionText: "What happens if a recursive function has NO base case?",
      options: [
        "Nothing—it works fine",
        "It becomes an infinite loop and crashes",
        "It automatically stops after 10 calls",
        "It turns into a for-loop",
      ],
      correctAnswer: "It becomes an infinite loop and crashes",
    },
    {
      questionText: "True or False: Recursion is useful for exploring tree-like structures.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "Which of these is the recursive step in a countdown function?",
      options: [
        "print(n)",
        "if n == 0 then stop",
        "countdown(n - 1)",
        "return true",
      ],
      correctAnswer: "countdown(n - 1)",
    },
    {
      questionText:
        "Why might recursion be preferred over loops in some problems?",
      options: [
        "Recursion is always faster",
        "Some problems are naturally self-similar and break into smaller subproblems",
        "Loops cannot handle numbers larger than 100",
        "Recursion requires no memory",
      ],
      correctAnswer:
        "Some problems are naturally self-similar and break into smaller subproblems",
    },
    {
      questionText: "True or False: Every recursive function can be rewritten using loops.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
  ],
};
