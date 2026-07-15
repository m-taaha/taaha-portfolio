export interface System {
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;

  readonly technologies: readonly string[];

  readonly github?: string;
  readonly gitlab?: string;
  readonly live?: string;

  readonly image: string;

  readonly featured: boolean;
}

export const systems: readonly System[] = [
  {
    id: "kidsportal",

    title: "KidsPortal",

    tagline: "Interactive Learning Platform",

    description:
      "A modern learning platform where children explore interactive stories, videos, quizzes, and educational content powered by a custom CMS.",

    technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],

    image: "/images/projects/kidsportal/cover.png",

    github: "https://github.com/m-taaha/taaha-portfolio",

    featured: true,
  },

  {
    id: "portfolio",

    title: "Developer Portfolio",

    tagline: "Personal Brand",

    description:
      "A premium portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion focused on performance and beautiful user experience.",

    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],

    image: "/images/projects/portfolio/cover.png",

    gitlab: "https://gitlab.com/zavianexus/kidsportal",

    featured: true,
  },

  {
    id: "nitpick",

    title: "NitPIck",

    tagline: "AI Code Review Assistant",

    description:
      "An AI-powered code review platform that analyzes pull requests, runs background jobs with BullMQ and Redis, and provides intelligent feedback to improve code quality.",

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
