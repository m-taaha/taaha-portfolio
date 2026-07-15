export interface System {
  readonly id: string;

  readonly name: string;

  readonly category: string;

  readonly overview: string;

  readonly problem: string;

  readonly solution: string;

  readonly architecture: readonly string[];

  readonly highlights: readonly string[];

  readonly technologies: readonly string[];

  readonly image: string;

  readonly github?: string;

  readonly live?: string;

  readonly featured: boolean;
}

export const systems: readonly System[] = [
  {
    id: "kidsportal",

    name: "KidsPortal",

    category: "Interactive Learning Platform",

    overview:
      "A modern educational platform where children learn through interactive stories, videos and quizzes powered by a custom CMS.",

    problem:
      "Traditional learning platforms provide static content with limited engagement and almost no personalization.",

    solution:
      "Built an interactive learning platform with a custom CMS, branching story engine, XML imports and scalable FastAPI backend.",

    architecture: [
      "React Frontend",
      "FastAPI Backend",
      "PostgreSQL Database",
      "Story Engine",
      "Custom CMS",
    ],

    highlights: [
      "Interactive Story Engine",
      "CMS Dashboard",
      "Authentication",
      "XML Story Import",
      "Video Content Delivery",
    ],

    technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],

    image: "/images/projects/kidsportal/cover.png",

    github: "https://github.com/m-taaha/taaha-portfolio",

    featured: true,
  },

  {
    id: "portfolio",

    name: "taaha.dev",

    category: "Personal Engineering Portfolio",

    overview:
      "A premium developer portfolio designed to showcase engineering thinking rather than simply listing projects.",

    problem:
      "Most developer portfolios look identical and fail to communicate engineering decisions behind the work.",

    solution:
      "Designed a component-driven portfolio focused on storytelling, reusable architecture and smooth interactions.",

    architecture: [
      "Next.js App Router",
      "Reusable Components",
      "Motion System",
      "Design Tokens",
    ],

    highlights: [
      "Dark-first Design",
      "Framer Motion",
      "Responsive Layout",
      "Component Architecture",
    ],

    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],

    image: "/images/projects/portfolio/cover.png",

    github: "https://github.com/m-taaha/taaha.dev",

    featured: true,
  },

  {
    id: "nitpick",

    name: "NitPick",

    category: "AI Code Review Platform",

    overview:
      "An AI-assisted developer platform that automates pull request analysis and intelligent code reviews.",

    problem:
      "Manual code reviews consume engineering time and often miss repetitive quality issues.",

    solution:
      "Designed an AI-powered review pipeline using background workers, Redis queues and LLM-based analysis.",

    architecture: [
      "Next.js",
      "Node.js API",
      "BullMQ Workers",
      "Redis Queue",
      "OpenAI",
    ],

    highlights: [
      "AI Code Review",
      "Background Jobs",
      "Queue Processing",
      "GitHub Integration",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "BullMQ",
      "Redis",
      "OpenAI",
    ],

    image: "/images/projects/nitpick/cover.png",

    github: "https://github.com/m-taaha/nitpick",

    featured: true,
  },
] as const;