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
    architecture: "USER -> REACT -> STATE -> API -> EXPRESS -> SQLITE"
  }
];
