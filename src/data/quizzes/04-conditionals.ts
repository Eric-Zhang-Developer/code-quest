import { QuizData } from "@/lib/types/types";

export const conditionalsQuiz: QuizData = {
  title: "The Forking Path – Choosing Fate with If and Else",
  id: "conditionals",
  questions: [
    {
      questionText: "What does an 'if' statement do in code?",
      options: [
        "Automatically repeats an action forever",
        "Checks a condition and executes code if it's true",
        "Creates a new variable",
        "Deletes data from memory",
      ],
      correctAnswer: "Checks a condition and executes code if it's true",
    },
    {
      questionText: "What is the purpose of an 'else' branch?",
      options: [
        "To provide an alternative path if the 'if' condition is false",
        "To pause the program",
        "To store user input",
        "To display a message only once",
      ],
      correctAnswer: "To provide an alternative path if the 'if' condition is false",
    },
    {
      questionText: "Which of these is an example of a conditional?",
      options: [
        "if health <= 0 then Display: 'You have fallen...'",
        "Display: 'Hello World!'",
        "Character_Name = input('Enter name')",
        "gold = gold + 10",
      ],
      correctAnswer: "if health <= 0 then Display: 'You have fallen...'",
    },
    {
      questionText: "True or False: Conditionals allow programs to make choices.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "Why are conditionals important in programming?",
      options: [
        "They allow programs to react to different situations",
        "They make code run faster automatically",
        "They prevent all bugs",
        "They create variables",
      ],
      correctAnswer: "They allow programs to react to different situations",
    },
    {
      questionText: "Which analogy was used to describe conditionals in the tutorial?",
      options: [
        "Straight hallway vs. branching dungeon",
        "Magic wand sparks",
        "First greeting 'Hello World'",
        "Listening ear",
      ],
      correctAnswer: "Straight hallway vs. branching dungeon",
    },
  ],
};
