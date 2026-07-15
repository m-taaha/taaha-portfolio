export interface BlueprintNodeData {
  id: string;

  label: string;

  x: number;

  y: number;
}

export const blueprintNodes: BlueprintNodeData[] = [
  {
    id: "frontend",
    label: "Frontend",
    x: 330,
    y: 70,
  },

  {
    id: "backend",
    label: "API",
    x: 170,
    y: 190,
  },

  {
    id: "auth",
    label: "Auth",
    x: 490,
    y: 190,
  },

  {
    id: "database",
    label: "Database",
    x: 330,
    y: 320,
  },

  {
    id: "engine",
    label: "Engine",
    x: 330,
    y: 450,
  },
];

export const blueprintConnections = [
  ["frontend", "backend"],

  ["frontend", "auth"],

  ["backend", "database"],

  ["auth", "database"],

  ["database", "engine"],
] as const;
