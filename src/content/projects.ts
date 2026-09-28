export const projects = [
  {
    id: "wfa-sqlite",
    title: "WFA-SQLite",
    type: "Full Stack",
    shortDescription: "Workforce Administration Platform with React and SQLite.",
    year: "2025",
    technologies: [
      "React", "TypeScript", "Vite", "MUI", "Redux Toolkit", 
      "TanStack Query", "Recharts", "Node.js", "Express", 
      "SQLite", "better-sqlite3", "Socket.IO", "Zod", 
      "Vitest", "React Testing Library", "Playwright", "Supertest", "Docker", "NGINX"
    ],
    demoLink: "https://example.com/wfa-sqlite",
    githubLink: "https://github.com/maheswaripinneti/wfa-sqlite",
    features: [
      "Employee management",
      "Attendance",
      "Leave management",
      "Payroll",
      "Expenses",
      "Timesheets",
      "Shifts & Rosters",
      "RBAC",
      "Dashboards"
    ],
    problem: "Needed a comprehensive workforce management system.",
    solution: "Built a robust monolithic architecture with React and Express.",
    architecture: "USER -> REACT -> STATE -> API -> EXPRESS -> SQLITE",
    status: "Completed"
  },
  {
    id: "finote",
    title: "Finote",
    type: "Mobile Web App",
    shortDescription: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health.",
    year: "2026",
    technologies: [
      "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"
    ],
    demoLink: "https://example.com/finote",
    githubLink: "https://github.com/maheswaripinneti/finote",
    features: [
      "Wallet integration",
      "Expense tracking",
      "Financial health score",
      "Monthly reports"
    ],
    problem: "People need a simple way to track crypto and fiat in one place.",
    solution: "A mobile-first web app using Next.js and Prisma.",
    architecture: "USER -> NEXT.JS -> SERVER ACTIONS -> PRISMA -> POSTGRES",
    status: "Active"
  },
  {
    id: "nextdemy",
    title: "Nextdemy",
    type: "E-Learning",
    shortDescription: "A monorepo-powered learning platform with real payments, real auth, and real content delivery.",
    year: "2025",
    technologies: [
      "Next.js", "Stripe", "Auth.js", "Sanity CMS", "React Video", "Tailwind"
    ],
    demoLink: "https://example.com/nextdemy",
    githubLink: "https://github.com/maheswaripinneti/nextdemy",
    features: [
      "Course selling",
      "Video streaming",
      "Progress tracking",
      "CMS integration"
    ],
    problem: "Needed a customized LMS without expensive monthly fees.",
    solution: "Built a headless LMS powered by Sanity and Next.js.",
    architecture: "USER -> NEXT.JS -> SANITY API -> STRIPE WEBHOOKS",
    status: "Completed"
  }
];
