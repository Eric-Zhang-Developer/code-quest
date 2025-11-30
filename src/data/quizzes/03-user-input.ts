import { QuizData } from "@/lib/types/types";

export const userInputQuiz: QuizData = {
  title: "The Scribe's Listening Ear",
  id: "user-input",
  questions: [
    {
      questionText: "What is the main purpose of user input in a program?",
      options: [
        "To make the program interactive and capture data from the user",
        "To display a message on the screen",
        "To automatically solve puzzles for the user",
        "To delete all variables",
      ],
      correctAnswer: "To make the program interactive and capture data from the user",
    },
    {
      questionText: "True or False: User input allows a program to pause and wait for the user to type something.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "Where is the text typed by the user stored?",
      options: ["In a Variable Pouch", "In the computer's memory forever", "On a sticky note", "It disappears immediately"],
      correctAnswer: "In a Variable Pouch",
    },
    {
      questionText: "Which Python command is used to capture user input?",
      options: ["input()", "print()", "console.log()", "prompt()"],
      correctAnswer: "input()",
    },
    {
      questionText: "Which of these commands is used to capture user input in JavaScript?",
      options: ["prompt()", "input()", "Console.ReadLine()", "display()"],
      correctAnswer: "prompt()",
    },
    {
      questionText: "True or False: The value typed by the user can be stored and used later in the program.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "Why is capturing user input important in creating a dynamic program?",
      options: [
        "It allows programs to react to user choices and create personalized experiences",
        "It makes programs slower and less interactive",
        "It automatically fixes all bugs",
        "It prevents the user from typing anything",
      ],
      correctAnswer: "It allows programs to react to user choices and create personalized experiences",
    },
    {
      questionText: "In the tutorial, capturing input was compared to what analogy?",
      options: [
        "Holding up a listening shell",
        "Throwing a magic scroll",
        "Building a fortress wall",
        "Casting a fireball",
      ],
      correctAnswer: "Holding up a listening shell",
    },
  ],
};
