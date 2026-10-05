export interface ExperienceArtifact {
  readonly title: string;
  readonly subtitle: string;
  readonly lesson: string;
  readonly link?: string;
}

export interface ExperienceItem {
  readonly year: string;
  readonly period?: string;
  readonly current?: boolean;
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
        "Good interfaces aren't about beautiful components-they're about reducing friction for users.",
    },
  },

  {
    year: "2025",

    title: "Backend",

    organization: "Designing Systems",

    description:
      "This was the biggest mindset shift. I stopped thinking in pages and components and started thinking in services, data flow, authentication, and scalable backend architecture.",

    technologies: ["Node.js", "Express", "MongoDB", "JWT", "TypeScript"],

    artifact: {
      title: "First REST API",
      subtitle: "Express + MongoDB",
      lesson:
        "Good backend systems are designed around how data moves, not around how endpoints are written.",
    },
  },

  {
    year: "2025",

    title: "Real-time Collaboration",

    organization: "exac.draw · Collaborative Whiteboard",

    description:
      "Engineered real-time canvas synchronization over WebSockets for simultaneous multi-user editing, and persisted whiteboard state in PostgreSQL.",

    technologies: ["Next.js", "WebSockets", "PostgreSQL", "Turborepo"],

    artifact: {
      title: "exac.draw",
      subtitle: "Real-time Collaborative Whiteboard",
      lesson:
        "Collaborative canvas work brings live synchronization, custom rendering, and durable state together.",
    },
  },

  {
    year: "2025",
    period: "2025 – Present",

    title: "Tech Lead",

    organization: "Tezos Society · Jamia Hamdard",

    description:
      "Lead a team of student developers on technical initiatives and events, and launched DSA-focused practice sessions for new team members.",

    technologies: ["Team Leadership", "Developer Mentoring", "DSA", "Technical Events"],

    artifact: {
      title: "Student Developer Team",
      subtitle: "Tezos Society · Jamia Hamdard",
      lesson:
        "Teaching others exposed gaps in my own understanding faster than building projects alone.",
    },
  },

{
  year: "2026",
  title: "AI Systems",
  organization: "Building Intelligent Products",
  description:
    "Instead of using AI as a feature, I started designing systems around it. NitPick taught me how asynchronous processing, queues, validation, GitHub integrations, and LLMs work together to solve real engineering problems.",

  technologies: [
    "Python",
    "FastAPI",
    "Celery",
    "Redis",
    "Gemini",
  ],

  artifact: {
    title: "NitPick",
    subtitle: "AI Code Review Platform",
    lesson:
      "LLMs become significantly more valuable when surrounded by reliable systems for orchestration, validation, and delivery.",
  },
},

  {
    year: "2026",
    period: "Jan 2026 – Present",
    current: true,
    title: "Student Intern",
    organization: "ZaviaNexus Infoventures Pvt. Ltd.",
    description:
      "Contributing to ZipMinds, an AI-enabled education portal for children. The internship confirmation describes a Python platform using LangChain and LangGraph to support guided learning experiences.",
    technologies: ["Python", "LangChain", "LangGraph", "Agentic AI"],
    artifact: {
      title: "ZipMinds",
      subtitle: "AI-enabled education portal",
      lesson:
        "Exploring how language-model workflows can support guided, interactive learning experiences.",
    },
  },

  {
    year: "Today",

    title: "System Design",

    organization: "Current Focus",

    description:
      "Today my focus is designing production-ready software, AI-powered   developer tools, and scalable systems where architecture matters more than frameworks.",

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
        "The best engineering decisions usually come from evaluating trade-offs rather than chasing the newest technology.",
    },
  },
] as const;
