export type NodeType = "client" | "server" | "database" | "service" | "queue";

export interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  type?: NodeType;
}

export interface ConnectionData {
  from: string;
  to: string;
}

export interface BlueprintData {
  id: string;
  nodes: NodeData[];
  connections: ConnectionData[];
}

export const architectures: Record<string, BlueprintData> = {
  kidsportal: {
    id: "kidsportal",
    nodes: [
      { id: "react", label: "React UI", x: 200, y: 500, type: "client" },
      { id: "fastapi", label: "FastAPI", x: 500, y: 500, type: "server" },
      { id: "postgres", label: "PostgreSQL", x: 800, y: 300, type: "database" },
      {
        id: "storyengine",
        label: "Story Engine",
        x: 800,
        y: 700,
        type: "service",
      },
    ],
    connections: [
      { from: "react", to: "fastapi" },
      { from: "fastapi", to: "postgres" },
      { from: "fastapi", to: "storyengine" },
    ],
  },
  portfolio: {
    id: "portfolio",
    nodes: [
      {
        id: "github",
        label: "GitHub",
        x: 110,
        y: 140,
        type: "service",
      },

      {
        id: "webhook",
        label: "Webhook",
        x: 390,
        y: 140,
        type: "server",
      },

      {
        id: "bullmq",
        label: "BullMQ",
        x: 700,
        y: 140,
        type: "queue",
      },

      {
        id: "redis",
        label: "Redis",
        x: 520,
        y: 360,
        type: "database",
      },

      {
        id: "openai",
        label: "OpenAI",
        x: 920,
        y: 360,
        type: "service",
      },
    ],
    connections: [
      { from: "config", to: "tokens" },
      { from: "tokens", to: "components" },
      { from: "components", to: "pages" },
      { from: "pages", to: "deployment" },
    ],
  },
  nitpick: {
    id: "nitpick",
    nodes: [
  {
    id: "github",
    label: "GitHub",
    x: 110,
    y: 200,
  },

  {
    id: "webhook",
    label: "Webhook",
    x: 380,
    y: 200,
  },

  {
    id: "bullmq",
    label: "BullMQ",
    x: 660,
    y: 200,
  },

  {
    id: "redis",
    label: "Redis",
    x: 500,
    y: 380,
  },

  {
    id: "openai",
    label: "OpenAI",
    x: 860,
    y: 390,
  },
],
    connections: [
      { from: "github", to: "webhook" },
      { from: "webhook", to: "bullmq" },
      { from: "bullmq", to: "redis" },
      { from: "bullmq", to: "openai" },
    ],
  },
};
