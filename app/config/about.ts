export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface TimelineItem {
  readonly year: string;
  readonly title: string;
  readonly description: string;
}

export const about = {
  title: "About Me",

  intro:
    "I'm a software engineer passionate about building scalable web applications and AI-powered products. I enjoy designing clean architectures, solving backend problems, and continuously learning new technologies.",

  stats: [
    {
      value: "15+",
      label: "Projects Built",
    },
    {
      value: "4th",
      label: "Year CSE",
    },
    {
      value: "2027",
      label: "Graduation",
    },
    {
      value: "∞",
      label: "Curiosity",
    },
  ] as const,

  timeline: [
    {
      year: "Late 2024",
      title: "The Beginning",
      description:
        "Started learning web development from scratch and discovered a passion for building software.",
    },

    {
      year: "2025",
      title: "From Learning to Building",
      description:
        "Moved beyond tutorials by creating full-stack applications, learning backend development, TypeScript, and writing production-style code.",
    },

    {
      year: "2026",
      title: "Backend Systems & AI",
      description:
        "Focused on scalable backend systems and AI-powered developer tools, combining modern web technologies with intelligent automation.",
    },
  ] as const,
} as const;
