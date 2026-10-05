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
      "Designing backend systems, APIs, databases, asynchronous workflows, and application architecture with scalability and maintainability in mind.",
    technologies: [
      "FastAPI",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLAlchemy",
      "Redis",
      "Celery",
      "Prisma",
    ],
  },

  {
    title: "Build Real-Time Products",
    description:
      "Creating collaborative and live experiences with event-driven communication between connected clients.",
    technologies: ["WebSockets", "Socket.IO", "WebRTC"],
  },

  {
    title: "Ship AI Products",

    description:
      "Building AI-powered workflows with language models, asynchronous processing, structured output validation, and developer-tool integrations.",

    technologies: [
      "Gemini",
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Celery",
      "Pydantic",
      "GitHub API",
    ],
  },
] as const;
