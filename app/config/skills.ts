export interface SkillCategory {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export const skills: readonly SkillCategory[] = [
  {
    title: "Frontend",

    description:
      "Building responsive, accessible, and performant user interfaces with modern React-based technologies.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",

    description:
      "Designing scalable APIs, databases, and backend systems with modern development practices.",

    technologies: ["Node.js", "FastAPI", "Python", "PostgreSQL", "Redis"],
  },

  {
    title: "AI & Developer Tools",

    description:
      "Exploring AI integrations, automation, background processing, and developer productivity tools.",

    technologies: ["OpenAI", "BullMQ", "Git", "GitHub API"],
  },
] as const;