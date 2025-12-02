<p align="center">
  <img src="./public/codequestAllDark.png" alt="CodeQuest Logo" width="800"/>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Vitest](https://img.shields.io/badge/Vitest-%236E9F18.svg?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![React Testing Library](https://img.shields.io/badge/RTL-%23E33332.svg?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-000000?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/pack)

## About

A gamified, fantasy-themed web application that teaches programming fundamentals through interactive quests, embedded videos, and quizzes.

**CodeQuest** transforms learning to code into an epic adventure. Users embark on a journey through 10 progressive programming quests, each presented as an ancient scroll filled with knowledge. The platform uses fantasy RPG theming - spells, incantations, oracles, and sorcery - to make programming concepts engaging and memorable for beginners.

[![Play Now!](https://img.shields.io/badge/-Start%20Your%20Journey!-6366f1?style=for-the-badge)](https://intro-swe-term-project.vercel.app/)

## How It Works

1. **Begin Your Journey**: Visit the landing page and click "Start Your Journey" to enter the realm.

2. **Sign In**: Authenticate with your account to track your progress across quests.

3. **Explore the Dashboard**: View your quest map - a visual progression path showing completed and upcoming quests with connecting arrows.

4. **Select a Quest**: Choose from 10 programming quests, starting with "Hello World" and advancing through Variables, Loops, Functions, and beyond.

5. **Learn from the Scrolls**: Each quest presents a beautifully themed tutorial with explanations, code examples, and embedded YouTube videos.

6. **Prove Your Knowledge**: Complete the quiz at the end of each quest to test your understanding and mark the quest as complete.

7. **Track Your Progress**: Return to the dashboard to see your completed quests highlighted in green, then continue your adventure!

## Key Features

- **Fantasy Quest Theme**: Immersive RPG - style presentation transforms dry programming concepts into an engaging adventure with scrolls, oracles, and incantations.

- **10 Progressive Programming Quests**: A structured curriculum covering Hello World, Variables, User Input, Conditionals, Loops, Math, Functions, Lists & Arrays, Dictionaries, and Recursion.

- **Visual Progress Map**: An interactive dashboard displays your learning path with visual arrows connecting quests, showing completion status at a glance.

- **Embedded Video Tutorials**: Each quest includes curated YouTube videos to supplement the written content and cater to different learning styles.

- **Interactive Quizzes**: Test your knowledge after each quest with themed multiple-choice quizzes that reinforce key concepts.

- **User Authentication & Progress Tracking**: Secure OAuth login via Supabase with persistent progress tracking - pick up right where you left off.

- **Reset Progress**: Option to reset all quest completions and start your journey fresh.

## Tech Stack

### Frontend

- **React 19**
- **Next.js 15** (with Turbopack)
- **TypeScript**
- **TailwindCSS**
- **DaisyUI**
- **Lucide React** (icons)

### Backend

- **Next.js API Routes & Server Actions**
- **Supabase** (Authentication & Database)
- **PostgreSQL**

### Testing

- **Vitest**
- **React Testing Library**
- **jsdom**

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   # Create a .env.local file with your Supabase credentials
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build for production                    |
| `npm run start` | Start production server                 |
| `npm run lint`  | Run ESLint                              |
| `npm run test`  | Run tests with Vitest                   |

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
