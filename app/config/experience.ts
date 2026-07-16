export interface ExperienceArtifact {
  readonly title: string;
  readonly subtitle: string;
  readonly lesson: string;
  readonly link?: string;
}

export interface ExperienceItem {
  readonly year: string;
  readonly title: string;
  readonly organization: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly artifact: ExperienceArtifact;
}

export const experiences: readonly ExperienceItem[] = [
  {
    year: "2023",

    title: "C++",

    organization: "Programming Foundations",

    description:
      "This was where software engineering finally started making sense. I learned algorithms, recursion, STL, debugging, and discovered that solving problems was more rewarding than simply writing code.",

    technologies: ["C++", "STL", "Recursion", "Algorithms", "Problem Solving"],

    artifact: {
      title: "First Recursive Problems",
      subtitle: "Problem Solving",
      lesson:
        "Recursion finally made sense once I started visualizing the call stack instead of memorizing code.",
    },
  },

  {
    year: "2024",

    title: "Frontend",

    organization: "Building User Experiences",

    description:
      "I shifted from solving isolated coding problems to creating interfaces people could actually use. React taught me how design, interaction, and developer experience come together.",

    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],

    artifact: {
      title: "First Complete UI",
      subtitle: "React Project",
      lesson:
        "Good interfaces aren't about beautiful components—they're about reducing friction for users.",
    },
  },

  {
    year: "2025",

    title: "Backend",

    organization: "Designing Systems",

    description:
      "This was the biggest mindset shift. I stopped thinking in pages and components and started thinking in APIs, authentication, databases, scalability, and system architecture.",

    technologies: ["Node.js", "Express", "MongoDB", "JWT", "TypeScript"],

    artifact: {
      title: "First REST API",
      subtitle: "Express + MongoDB",
      lesson:
        "Good backend design is mostly about data flow rather than writing endpoints.",
    },
  },

  {
    year: "2025",

    title: "Realtime",

    organization: "Distributed Communication",

    description:
      "Applications became conversations instead of requests. I explored WebSockets, event-driven architectures, queues, and asynchronous communication between services.",

    technologies: ["WebSockets", "Socket.IO", "Redis", "Events", "Queues"],

    artifact: {
      title: "Socket.IO Chat",
      subtitle: "Realtime Communication",
      lesson:
        "Applications became conversations instead of requests. That changed how I think about architecture.",
    },
  },

  {
    year: "2026",

    title: "Leadership",

    organization: "Jamia Hamdard Tezos Society",

    description:
      "I realized building software isn't only about writing code. Mentoring students, reviewing projects, and leading technical initiatives became just as rewarding as shipping features.",

    technologies: ["Leadership", "Mentoring", "Code Review", "Git"],

    artifact: {
      title: "Tech Head",
      subtitle: "Jamia Hamdard",
      lesson:
        "Building software is difficult. Helping other people build software is even harder.",
    },
  },

  {
    year: "2026",

    title: "AI Systems",

    organization: "Building Intelligent Products",

    description:
      "Instead of using AI as a chatbot, I started designing products around it. Projects like NitPick taught me how LLMs, queues, webhooks, background workers, and automation fit together.",

    technologies: ["OpenAI", "BullMQ", "Redis", "GitHub Webhooks", "Next.js"],

    artifact: {
      title: "NitPick",
      subtitle: "AI Code Review Platform",
      lesson:
        "LLMs become far more useful when surrounded by queues, webhooks and reliable system design.",
    },
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

    artifact: {
      title: "Current Direction",
      subtitle: "Architecture Thinking",
      lesson:
        "I now spend more time evaluating trade-offs than choosing frameworks.",
    },
  },
] as const;
