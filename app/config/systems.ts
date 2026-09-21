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
      "An AI-powered developer platform that analyzes code and GitHub pull requests and turns them into structured code-review findings.",

    problem:
      "Manual code reviews consume engineering time and can miss bugs, security risks, and logic issues across large pull requests.",

    solution:
      "Built an asynchronous review pipeline that routes code and pull-request diffs through FastAPI, Celery, Redis, and Gemini, validates structured findings, and stores review results for delivery to developers.",

    architecture: [
      "Next.js Frontend",
      "FastAPI API",
      "PostgreSQL",
      "Redis + Celery",
      "Python Worker",
      "Gemini",
    ],

    highlights: [
      "AI Code Reviews",
      "GitHub Webhooks",
      "Background Jobs",
      "Structured Output",
      "AI Validation",
      "LLM Integration",
    ],

    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Gemini",
      "Pydantic",
    ],

    image: "/images/projects/nitpick/cover.png",

    github:
      "[https://github.com/m-taaha/nitpick](https://github.com/m-taaha/nitpick)",

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