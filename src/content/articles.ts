export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "scaling-sqlite-in-production",
    title: "Scaling SQLite in Node.js Production Environments",
    description: "Why I chose SQLite for a monolithic enterprise architecture, and how WAL mode changes everything.",
    date: "Sep 20, 2026",
    readingTime: "5 min read",
    tags: ["SQLite", "Architecture", "Node.js"],
    content: "## The Myth of SQLite\n\nMany developers believe SQLite is only for testing or mobile apps. However, for a single-tenant enterprise application running on a single server, SQLite can vastly outperform traditional client-server databases like PostgreSQL or MySQL because it completely bypasses the network layer.\n\n## Enabling Write-Ahead Logging\n\nThe traditional problem with SQLite is concurrency—writes lock the entire database. By enabling WAL (`PRAGMA journal_mode = WAL`), readers no longer block writers and writers no longer block readers. This simple configuration change allows SQLite to easily handle thousands of concurrent requests."
  },
  {
    slug: "atomic-state-management-react",
    title: "Atomic State Management: Moving Beyond Context",
    description: "How switching from React Context to Zustand atomic state reduced input latency by 90%.",
    date: "Aug 14, 2026",
    readingTime: "4 min read",
    tags: ["React", "Performance", "Frontend"],
    content: "## The Context Trap\n\nReact Context is a fantastic tool for dependency injection, but it is terrible for state management. When a value inside a Context provider changes, every single component that consumes that context is forced to re-render, regardless of whether it actually uses the specific property that changed.\n\n## The Atomic Solution\n\nBy moving to atomic state models like Zustand or Jotai, components can subscribe directly to the exact slice of state they need. In a large data grid, this means changing one cell only re-renders that single cell, not the entire table."
  },
  {
    slug: "the-art-of-type-safety",
    title: "End-to-End Type Safety with Zod and TypeScript",
    description: "Sharing interfaces across the network boundary to ensure your API and Frontend never drift.",
    date: "Jul 02, 2026",
    readingTime: "6 min read",
    tags: ["TypeScript", "APIs", "Engineering"],
    content: "## The Boundary Problem\n\nYou can have perfectly typed frontend code and perfectly typed backend code, but if the API layer between them is untyped, you will still get runtime crashes.\n\n## Zod to the Rescue\n\nBy using Zod, you define a single schema that acts as both a runtime validator on your Express routes, and a compile-time type inference for your React queries. If the database shape changes, the backend fails to compile. If the API response changes, the frontend fails to compile. Total confidence."
  }
];
