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

  title: string;
  subtitle: string;
  status?: "Live" | "Building" | "Prototype";

  nodes: NodeData[];
  connections: ConnectionData[];
}

export const architectures: Record<string, BlueprintData> = {
  nitpick: {
    id: "nitpick",

    title: "NitPick",
    subtitle: "AI Code Review Platform",
    status: "Building",

    nodes: [
      {
        id: "github",
        label: "GitHub",
        x: 140,
        y: 260,
        type: "service",
      },

      {
        id: "webhook",
        label: "Webhook",
        x: 360,
        y: 260,
        type: "server",
      },

      {
        id: "queue",
        label: "BullMQ",
        x: 580,
        y: 260,
        type: "queue",
      },

      {
        id: "redis",
        label: "Redis",
        x: 500,
        y: 430,
        type: "database",
      },

      {
        id: "gemini",
        label: "Gemini",
        x: 820,
        y: 260,
        type: "service",
      },
    ],

    connections: [
      { from: "github", to: "webhook" },
      { from: "webhook", to: "queue" },
      { from: "queue", to: "redis" },
      { from: "queue", to: "gemini" },
    ],
  },

  kidsportal: {
    id: "kidsportal",

    title: "KidsPortal",
    subtitle: "Interactive Learning Platform",
    status: "Building",

    nodes: [
      {
        id: "client",
        label: "React",
        x: 130,
        y: 300,
        type: "client",
      },

      {
        id: "api",
        label: "FastAPI",
        x: 340,
        y: 300,
        type: "server",
      },

      {
        id: "story",
        label: "Story Engine",
        x: 590,
        y: 180,
        type: "service",
      },

      {
        id: "cms",
        label: "CMS",
        x: 590,
        y: 420,
        type: "service",
      },

      {
        id: "db",
        label: "PostgreSQL",
        x: 850,
        y: 300,
        type: "database",
      },
    ],

    connections: [
      { from: "client", to: "api" },
      { from: "api", to: "story" },
      { from: "api", to: "cms" },
      { from: "story", to: "db" },
      { from: "cms", to: "db" },
    ],
  },

  portfolio: {
    id: "portfolio",

    title: "taaha.dev",
    subtitle: "Developer Portfolio",
    status: "Live",

    nodes: [
      {
        id: "config",
        label: "Config",
        x: 130,
        y: 300,
        type: "service",
      },

      {
        id: "tokens",
        label: "Tokens",
        x: 310,
        y: 400,
        type: "service",
      },

      {
        id: "components",
        label: "Components",
        x: 490,
        y: 300,
        type: "service",
      },

      {
        id: "pages",
        label: "Pages",
        x: 670,
        y: 200,
        type: "server",
      },

      {
        id: "deploy",
        label: "Deploy",
        x: 850,
        y: 300,
        type: "service",
      },
    ],

    connections: [
      { from: "config", to: "tokens" },
      { from: "tokens", to: "components" },
      { from: "components", to: "pages" },
      { from: "pages", to: "deploy" },
    ],
  },
};
