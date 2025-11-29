import { QuizData } from "@/lib/types/types";

export const mathQuiz: QuizData = {
  title: "The Numeromancer’s Trial – Basic Math & Comparisons",
  id: "math",
  questions: [
    {
      questionText: "What does '+' do in code?",
      options: ["Subtract", "Add", "Multiply", "Divide"],
      correctAnswer: "Add",
    },
    {
      questionText: "Which operator checks if one number is less than another?",
      options: ["<", ">", "==", "!="],
      correctAnswer: "<",
    },
    {
      questionText: "What operator would check if two values are equal?",
      options: ["==", "!=", "<", ">"],
      correctAnswer: "==",
    },
    {
      questionText: "True or False: Comparison operators can be used in if statements and loops.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      questionText: "Which operator would you use to multiply two numbers?",
      options: ["*", "+", "-", "/"],
      correctAnswer: "*",
    },
    {
      questionText: "Why is basic math important in programming?",
      options: [
        "It allows programs to calculate and compare values for decisions",
        "It automatically changes text colors",
        "It fixes all bugs",
        "It creates random events",
      ],
      correctAnswer: "It allows programs to calculate and compare values for decisions",
    },
    {
      questionText: "Which operator checks if one number is greater than or equal to another?",
      options: [">", ">=", "<", "<="],
      correctAnswer: ">=",
    },
    {
      questionText: "Which operator checks if two numbers are not equal?",
      options: ["==", "!=", "<", ">"],
      correctAnswer: "!=",
    },
  ],
};
