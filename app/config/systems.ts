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

  readonly imageAlt?: string;

  readonly imageKind?: "screenshot" | "illustration";

  readonly github?: string;

  readonly gitlab?: string;

  readonly live?: string;

  readonly browserUrl: string;

  readonly featured: boolean;
}

export const projects: readonly System[] = [
  {
    id: "exac-draw",
    name: "exac.draw",
    category: "Real-time Collaborative Whiteboard",
    overview:
      "A collaborative whiteboard for simultaneous multi-user canvas editing, with real-time WebSocket synchronization and persistent board state.",
    problem:
      "A shared whiteboard needs edits from multiple people to stay in sync while preserving the board state between sessions.",
    solution:
      "Built a custom canvas rendering engine, synchronized canvas changes over WebSockets, and persisted whiteboard state in PostgreSQL.",
    architecture: [
      "Next.js 15 Client",
      "WebSocket Synchronization",
      "Custom Canvas Engine",
      "PostgreSQL State",
    ],
    highlights: [
      "Multi-user Editing",
      "WebSocket Synchronization",
      "Custom Canvas Rendering",
      "Persistent Board State",
      "Turborepo Monorepo",
    ],
    technologies: ["Next.js 15", "Turborepo", "WebSockets", "PostgreSQL", "Tailwind CSS", "pnpm"],
    image: "/images/projects/exac-draw/cover.svg",
    imageAlt: "Stylized illustration of a collaborative whiteboard interface",
    imageKind: "illustration",
    github: "https://github.com/m-taaha/exac-draw",
    live: "https://exac-draw-web.vercel.app/",
    browserUrl: "exac-draw-web.vercel.app",
    featured: true,
  },
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

    image: "/images/projects/kidsportal/cover-v3.png",

    gitlab: "https://gitlab.com/zavianexus/kidsportal",

    browserUrl: "kidsportal.local",

    featured: true,
  },

  {
    id: "musafir-trips",
    name: "Musafir Trips",
    category: "Full-Stack Travel Platform",
    overview:
      "A CMS-driven travel platform with an administration dashboard for tours, blogs, enquiries, awards, and site content.",
    problem:
      "Travel content and business enquiries need to be managed through one consistent platform with secure access and a flexible publishing workflow.",
    solution:
      "Built an admin-managed platform using Next.js Server Actions and Prisma, with Auth.js sign-in, Cloudinary uploads, a Tiptap editor, and ISR revalidation after content updates.",
    architecture: [
      "Next.js 14 App Router",
      "Auth.js v5",
      "Server Actions",
      "Prisma 7 + PostgreSQL",
      "Cloudinary + Tiptap",
      "Vercel",
    ],
    highlights: [
      "CMS-driven Content",
      "Admin Dashboard",
      "Google OAuth + Credentials",
      "Route-level Access Control",
      "ISR Content Revalidation",
      "Cloudinary Media Workflows",
    ],
    technologies: ["Next.js 14", "TypeScript", "Prisma 7", "PostgreSQL", "Auth.js v5", "Tailwind CSS", "Cloudinary", "Tiptap"],
    image: "/images/projects/musafir-trips/cover.svg",
    imageAlt: "Stylized illustration of a travel content management dashboard",
    imageKind: "illustration",
    github: "https://github.com/m-taaha/musafir-trips",
    live: "https://musafir-trips.vercel.app/",
    browserUrl: "musafir-trips.vercel.app",
    featured: false,
  },

  {
    id: "cropchain",
    name: "CropChain · Aperture 2.0",
    category: "Open-source Backend Contribution",
    overview:
      "An open-source contribution focused on validating backend requests and testing API behavior in the CropChain project.",
    problem:
      "A backend route lacked request protection, leaving its input handling and error behavior without a focused integration test suite.",
    solution:
      "Added Joi validation schemas and centralized request-validation middleware, then wrote Jest and Supertest integration tests for API behavior and error handling.",
    architecture: [
      "Express Route",
      "Joi Schemas",
      "Validation Middleware",
      "Jest + Supertest",
    ],
    highlights: [
      "Request Validation",
      "Centralized Middleware",
      "Integration Tests",
      "Error-path Coverage",
    ],
    technologies: ["Node.js", "Express", "Joi", "Jest", "Supertest", "JavaScript"],
    image: "/images/projects/cropchain/cover.svg",
    imageAlt: "Stylized illustration of an API validation and test workflow",
    imageKind: "illustration",
    github: "https://github.com/Nitya-003/CropChain",
    browserUrl: "github.com/Nitya-003/CropChain",
    featured: false,
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

const systemsOrder = ["nitpick", "kidsportal", "portfolio", "exac-draw"];

export const systems: readonly System[] = projects
  .filter((project) => project.featured)
  .sort((a, b) => systemsOrder.indexOf(a.id) - systemsOrder.indexOf(b.id));
