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

  readonly gitlab?: string;

  readonly live?: string;

  readonly browserUrl: string;

  readonly featured: boolean;
}

export const systems: readonly System[] = [
  {
    id: "nitpick",

    name: "NitPick",

    category: "AI Code Review Platform",

    overview:
      "An AI-assisted developer platform that automates pull request analysis and intelligent code reviews.",

    problem:
      "Manual code reviews consume engineering time and often miss repetitive quality issues across large pull requests.",

    solution:
      "Built an AI-powered review pipeline that processes GitHub pull requests through webhook events, background workers, Redis queues, and Gemini-powered analysis.",

    architecture: [
      "Next.js Frontend",
      "Node.js API",
      "BullMQ Workers",
      "Redis Queue",
      "Gemini Integration",
    ],

    highlights: [
      "AI Code Reviews",
      "GitHub Webhooks",
      "Background Jobs",
      "Queue Processing",
      "LLM Integration",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "BullMQ",
      "Redis",
      "Gemini",
    ],

    image: "/images/projects/nitpick/cover.png",

    github: "https://github.com/m-taaha/nitpick",

    browserUrl: "github.com/m-taaha/nitpick",

    featured: true,
  },

  {
    id: "kidsportal",

    name: "KidsPortal",

    category: "Interactive Learning Platform",

    overview:
      "A modern educational platform where children learn through interactive stories, videos, quizzes, and educator-managed content.",

    problem:
      "Traditional learning platforms provide static educational content with limited interaction and almost no personalization.",

    solution:
      "Built an interactive learning platform featuring a custom CMS, branching story engine, XML story imports, and a scalable FastAPI backend.",

    architecture: [
      "React Frontend",
      "FastAPI Backend",
      "PostgreSQL Database",
      "Story Engine",
      "Custom CMS",
    ],

    highlights: [
      "Interactive Story Engine",
      "XML Story Import",
      "CMS Dashboard",
      "Authentication",
      "Video Learning",
    ],

    technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],

    image: "/images/projects/kidsportal/cover-v2.png",

    gitlab: "https://gitlab.com/zavianexus/kidsportal",

    browserUrl: "kidsportal.local",

    featured: true,
  },

  {
    id: "portfolio",

    name: "taaha.dev",

    category: "Personal Engineering Portfolio",

    overview:
      "A premium engineering portfolio focused on showcasing systems thinking, reusable architecture, and developer experience.",

    problem:
      "Most developer portfolios present projects without explaining the engineering decisions behind them.",

    solution:
      "Designed a modular, component-driven portfolio with reusable UI primitives, motion architecture, and scalable configuration.",

    architecture: [
      "Next.js App Router",
      "Reusable Components",
      "Motion System",
      "Design Tokens",
      "Configuration Layer",
    ],

    highlights: [
      "Dark-first Design",
      "Reusable Architecture",
      "Framer Motion",
      "Responsive Layout",
      "Component System",
    ],

    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],

    image: "/images/projects/portfolio/cover.png",

    github: "https://github.com/m-taaha/taaha-portfolio",

    browserUrl: "taaha.dev",

    featured: true,
  },
] as const;