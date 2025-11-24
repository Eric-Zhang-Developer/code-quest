import { QuizData } from "@/lib/types/types";

export const helloWorldQuiz: QuizData = {
  title: "The Oracle's First Greeting",
  id: "hello-world",
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
    {
      questionText:
        "In the tutorial, teaching the computer to say 'Hello World' is compared to what analogy?",
      options: [
        "Training a dragon to fly",
        "Teaching a parrot its first words",
        "Building a fortress from scratch",
        "Brewing a complex potion",
      ],
      correctAnswer: "Teaching a parrot its first words",
    },
    {
      questionText:
        "Which of these commands was NOT mentioned as a way to display text in different languages?",
      options: ["console.log", "echo", "print", "shout_loudly"],
      correctAnswer: "shout_loudly",
    },
    {
      questionText: "Why is the 'Hello World' program considered a 'tradition'?",
      options: [
        "It connects you to generations of coders before you",
        "It requires a high-level wizard to perform",
        "It is the only program that never has bugs",
        "It costs gold coins to run",
      ],
      correctAnswer: "It connects you to generations of coders before you",
    },
    {
      questionText:
        "What does the 'Hello World' program prove about your 'magic wand' (coding setup)?",
      options: [
        "That it can levitate mountains",
        "That it is broken",
        "That it sparks and is ready for more complex commands",
        "That it needs to be recharged",
      ],
      correctAnswer: "That it sparks and is ready for more complex commands",
    },
    {
      questionText:
        "True or False: Even though the command looks different in different languages (like 'echo' or 'console.log'), the core idea is always to display the specific words.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
  ],
};
