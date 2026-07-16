export interface ExperienceItem {
  readonly year: string;
  readonly title: string;
  readonly organization: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export const experiences: readonly ExperienceItem[] = [
  {
    year: "2023",

    title: "C++",

    organization: "Programming Foundations",

    description:
      "Learned problem solving, algorithms, recursion and data structures. This is where software engineering started making sense.",

    technologies: ["C++", "STL", "DSA"],
  },

  {
    year: "2024",

    title: "Frontend",

    organization: "Building User Interfaces",

    description:
      "Moved from solving problems to building interfaces with React, creating responsive applications and learning modern frontend development.",

    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },

  {
    year: "2025",

    title: "Backend",

    organization: "Full Stack Development",

    description:
      "Started designing APIs, authentication systems, databases and complete backend architectures instead of only user interfaces.",

    technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
  },

  {
    year: "2025",

    title: "Realtime",

    organization: "Distributed Systems",

    description:
      "Explored WebSockets, queues and event-driven communication while learning how scalable applications exchange data.",

    technologies: ["WebSockets", "Redis", "BullMQ", "Socket.io"],
  },

  {
    year: "2026",

    title: "Leadership",

    organization: "Jamia Hamdard Tezos Society",

    description:
      "Began mentoring students, leading technical initiatives and helping teams build real-world software together.",

    technologies: ["Leadership", "Git", "Code Reviews", "Mentoring"],
  },

  {
    year: "2026",

    title: "AI Systems",

    organization: "Building with LLMs",

    description:
      "Focused on AI-powered products like NitPick, combining LLMs, background workers, GitHub webhooks and intelligent automation.",

    technologies: ["OpenAI", "BullMQ", "Redis", "Next.js"],
  },

  {
    year: "Today",

    title: "System Design",

    organization: "Continuous Journey",

    description:
      "Currently focused on building production-grade software, scalable architectures and developer tools while preparing for top engineering roles.",

    technologies: ["Architecture", "AI", "Cloud", "System Design"],
  },
] as const;
