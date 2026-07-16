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

  // Backend

  {
    id: "node",
    label: "Node.js",
    x: 570,
    y: 220,
  },

  {
    id: "express",
    label: "Express",
    x: 760,
    y: 90,
  },

  {
    id: "fastapi",
    label: "FastAPI",
    x: 760,
    y: 350,
  },

  // Databases

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
    y: 430,
  },

  // AI

  {
    id: "gemini",
    label: "Gemini",
    x: 1180,
    y: 430,
  },
];

export const techEdges: TechEdge[] = [
  {
    from: "react",
    to: "next",
  },

  {
    from: "next",
    to: "typescript",
  },

  {
    from: "typescript",
    to: "node",
  },

  {
    from: "node",
    to: "express",
  },

  {
    from: "node",
    to: "fastapi",
  },

  {
    from: "express",
    to: "postgres",
  },

  {
    from: "express",
    to: "mongodb",
  },

  {
    from: "fastapi",
    to: "mysql",
  },

  {
    from: "fastapi",
    to: "redis",
  },

  {
    from: "redis",
    to: "gemini",
  },
];
