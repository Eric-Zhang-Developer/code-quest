import { QuizData } from "@/lib/types/types";


export const variablesQuiz: QuizData = {
  title: "The Artisan's Toolkit - Mastering Variable Vaults",
  id: "variables-quest",
  questions: [
    {
      questionText: "What is the main purpose of a variable in programming?",
      options: [
        "To store and manage information like a labeled magical pouch",
        "To summon a thunderstorm inside your computer",
        "To permanently freeze a value in time",
        "To rename your computer's hard drive",
      ],
      correctAnswer: "To store and manage information like a labeled magical pouch",
    },
    {
      questionText: "Which analogy best describes a variable?",
      options: [
        "A dragon perched on a castle tower",
        "A labeled box that can hold different items over time",
        "A bottomless pit of random numbers",
        "A potion that explodes when touched",
      ],
      correctAnswer: "A labeled box that can hold different items over time",
    },
    {
      questionText: "True or False: Once you put a value inside a variable, it can never change.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      questionText: "In the tutorial, variables are compared to which magical object?",
      options: [
        "A wizard’s enchanted broomstick",
        "A pouch or storage box that holds information",
        "A cursed mirror that repeats everything you say",
        "A phoenix egg that never hatches",
      ],
      correctAnswer: "A pouch or storage box that holds information",
    },
    {
      questionText: "Which of the following is an example of a variable name?",
      options: ["Player_Health", "100", "Open_Sesame!", "fireball()"],
      correctAnswer: "Player_Health",
    },
    {
      questionText: "What does the value inside a variable represent?",
      options: [
        "The magical item currently stored in the pouch",
        "A permanent tattoo on your code",
        "The name of the programmer who wrote the code",
        "A random spell cast by the machine",
      ],
      correctAnswer: "The magical item currently stored in the pouch",
    },
    {
      questionText: "Why are variables important for making a program dynamic?",
      options: [
        "Because they allow information to change as the program runs",
        "Because they automatically write new levels of your game",
        "Because they attract friendly goblins to help with coding",
        "Because they turn numbers into treasure chests",
      ],
      correctAnswer: "Because they allow information to change as the program runs",
    },
    {
      questionText:
        "In the example, if Player_Health starts at 100 and the player takes 20 damage, what does the updated variable value become?",
      options: ["80", "20", "120", "0"],
      correctAnswer: "80",
    },
    {
      questionText: "True or False: A variable’s name tells the machine what value it contains.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
  ],
};
