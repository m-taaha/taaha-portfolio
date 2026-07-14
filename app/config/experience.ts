export interface ExperienceItem {
  readonly year: string;
  readonly title: string;
  readonly organization: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export const experiences: readonly ExperienceItem[] = [
  {
    year: "2026",

    title: "Tech Head",

    organization: "Jamia Hamdard Tezos Society",

    description:
      "Leading technical initiatives, mentoring members, organizing development activities, and helping students build real-world software projects.",

    technologies: ["Leadership", "React", "Next.js", "Git"],
  },

  {
    year: "2026",

    title: "KidsPortal",

    organization: "Full Stack Developer",

    description:
      "Built an interactive learning platform with React and FastAPI featuring XML story imports, a custom CMS, interactive learning experiences, and scalable backend architecture.",

    technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
  },

  {
    year: "2026",

    title: "NitPick",

    organization: "Personal Project",

    description:
      "Building an AI-powered code review platform using BullMQ, Redis, GitHub webhooks, and OpenAI to automate pull request analysis.",

    technologies: ["Next.js", "BullMQ", "Redis", "OpenAI"],
  },

  {
    year: "2025",

    title: "Full Stack Engineering Journey",

    organization: "Self Learning",

    description:
      "Transitioned from tutorials to building production-style full-stack applications while learning backend development, TypeScript, and software architecture.",

    technologies: ["React", "Node.js", "TypeScript"],
  },
] as const;
