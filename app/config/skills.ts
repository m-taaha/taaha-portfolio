export interface SkillCategory {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export const skills: readonly SkillCategory[] = [
  {
    title: "Build Interfaces",

    description:
      "Crafting responsive interfaces that feel fast, accessible, and effortless to use across modern web applications.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
  },

  {
    title: "Engineer Systems",

    description:
      "Designing scalable backend architectures, APIs, databases, and production-ready infrastructure.",

    technologies: [
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },

  {
    title: "Ship AI Products",

    description:
      "Building AI-powered workflows with automation, LLM integrations, queues, and developer tooling.",

    technologies: ["Gemini", "Python", "GitHub API", "BullMQ", "Git"],
  },
] as const;
