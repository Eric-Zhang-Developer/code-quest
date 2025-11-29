import { QuizData } from "@/lib/types/types";

export const listsArraysQuiz: QuizData = {
  title: "The Adventurer’s Pack – Lists & Arrays",
  id: "lists-arrays",
  questions: [
    {
      questionText: "What is a list/array?",
      options: [
        "A magical potion that boosts strength",
        "A sequence of values stored in order",
        "A type of armor worn by wizards",
        "A single variable that can only hold one value",
      ],
      correctAnswer: "A sequence of values stored in order",
    },
    {
      questionText: "At what index does a list/array typically start?",
      options: ["1", "0", "5", "-1"],
      correctAnswer: "0",
    },
    {
      questionText: "Which example shows accessing an item in a list?",
      options: [
        `health = 100 - 20`,
        `inventory[1]`,
        `print("Hello World")`,
        `loop i from 1 to 10`,
      ],
      correctAnswer: "inventory[1]",
    },
    {
      questionText: "Why are lists useful for inventory systems?",
      options: [
        "They automatically create new items out of thin air",
        "They let you group related items together in one structure",
        "They turn items into gold when combined",
        "They eliminate the need for loops",
      ],
      correctAnswer:
        "They let you group related items together in one structure",
    },
    {
      questionText:
        "Which operation is *not* something you typically do with a list?",
      options: [
        "Add items",
        "Change items",
        "Loop through items",
        "Teleport items to another dimension",
      ],
      correctAnswer: "Teleport items to another dimension",
    },
    {
      questionText:
        "What does this code return? inventory = ['Sword', 'Shield']; inventory[0]",
      options: ["'Shield'", "'Sword'", "0", "An error"],
      correctAnswer: "'Sword'",
    },
    {
      questionText: "Why are loops powerful when used with lists?",
      options: [
        "They let you visit every item one by one",
        "They turn every item into a weapon",
        "They remove items instantly",
        "They randomize the list automatically",
      ],
      correctAnswer: "They let you visit every item one by one",
    },
    {
      questionText:
        "True or False: A list can only hold items of the same type.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
  ],
};
