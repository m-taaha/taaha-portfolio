export interface TechNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

export interface TechEdge {
  from: string;
  to: string;
}

export const techNodes: TechNode[] = [
  // Frontend
  {
    id: "react",
    label: "React",
    x: 70,
    y: 220,
  },
  {
    id: "next",
    label: "Next.js",
    x: 230,
    y: 220,
  },
  {
    id: "typescript",
    label: "TypeScript",
    x: 400,
    y: 220,
  },

  // Node Backend
  {
    id: "node",
    label: "Node.js",
    x: 570,
    y: 90,
  },
  {
    id: "express",
    label: "Express",
    x: 760,
    y: 90,
  },

  // Python Backend
  {
    id: "python",
    label: "Python",
    x: 570,
    y: 350,
  },
  {
    id: "fastapi",
    label: "FastAPI",
    x: 760,
    y: 350,
  },

  // Databases / Infrastructure
  {
    id: "postgres",
    label: "PostgreSQL",
    x: 980,
    y: 60,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    x: 980,
    y: 170,
  },
  {
    id: "mysql",
    label: "MySQL",
    x: 980,
    y: 330,
  },
  {
    id: "redis",
    label: "Redis",
    x: 980,
    y: 440,
  },

  // Async / AI
  {
    id: "celery",
    label: "Celery",
    x: 1160,
    y: 320,
  },
  {
    id: "gemini",
    label: "Gemini",
    x: 1160,
    y: 470,
  },
];

export const techEdges: TechEdge[] = [
  // Frontend
  {
    from: "react",
    to: "next",
  },
  {
    from: "next",
    to: "typescript",
  },

  // Node stack
  {
    from: "typescript",
    to: "node",
  },
  {
    from: "node",
    to: "express",
  },
  {
    from: "express",
    to: "postgres",
  },
  {
    from: "express",
    to: "mongodb",
  },

  // Python / FastAPI stack
  {
    from: "python",
    to: "fastapi",
  },
  {
    from: "fastapi",
    to: "postgres",
  },
  {
    from: "fastapi",
    to: "mysql",
  },

  // NitPick async pipeline
  {
    from: "fastapi",
    to: "celery",
  },
  {
    from: "celery",
    to: "redis",
  },
  {
    from: "celery",
    to: "gemini",
  },
];