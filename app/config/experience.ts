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
      "This was where software engineering finally started making sense. I learned algorithms, recursion, STL, debugging, and discovered that solving problems was more rewarding than simply writing code.",

    technologies: ["C++", "STL", "Recursion", "Algorithms", "Problem Solving"],
  },

  {
    year: "2024",

    title: "Frontend",

    organization: "Building User Experiences",

    description:
      "I shifted from solving isolated coding problems to creating interfaces people could actually use. React taught me how design, interaction, and developer experience come together.",

    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },

  {
    year: "2025",

    title: "Backend",

    organization: "Designing Systems",

    description:
      "This was the biggest mindset shift. I stopped thinking in pages and components and started thinking in APIs, authentication, databases, scalability, and system architecture.",

    technologies: ["Node.js", "Express", "MongoDB", "JWT", "TypeScript"],
  },

  {
    year: "2025",

    title: "Realtime",

    organization: "Distributed Communication",

    description:
      "Applications became conversations instead of requests. I explored WebSockets, event-driven architectures, queues, and asynchronous communication between services.",

    technologies: ["WebSockets", "Socket.IO", "Redis", "Events", "Queues"],
  },

  {
    year: "2026",

    title: "Leadership",

    organization: "Jamia Hamdard Tezos Society",

    description:
      "I realized building software isn't only about writing code. Mentoring students, reviewing projects, and leading technical initiatives became just as rewarding as shipping features.",

    technologies: ["Leadership", "Mentoring", "Code Review", "Git"],
  },

  {
    year: "2026",

    title: "AI Systems",

    organization: "Building Intelligent Products",

    description:
      "Instead of using AI as a chatbot, I started designing products around it. Projects like NitPick taught me how LLMs, queues, webhooks, background workers, and automation fit together.",

    technologies: ["OpenAI", "BullMQ", "Redis", "GitHub Webhooks", "Next.js"],
  },

  {
    year: "Today",

    title: "System Design",

    organization: "Current Focus",

    description:
      "Today I think beyond features. My focus is designing production-grade software, scalable architectures, developer tools, and AI-powered systems that solve meaningful problems.",

    technologies: [
      "Architecture",
      "Scalability",
      "AI",
      "Developer Tools",
      "System Design",
    ],
  },
] as const;
