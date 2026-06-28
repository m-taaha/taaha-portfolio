export const projects = [
  {
    num: "01",
    name: "Musafir Trips",
    desc: "Full-stack CMS-driven travel platform with secure admin dashboard, NextAuth v5, Server Actions, Cloudinary image pipeline, and ISR revalidation.",
    tags: ["Next.js", "TypeScript", "Prisma", "Neon", "Auth.js", "Tailwind"],
    github: "https://github.com/m-taaha/musafir-trips",
    live: "https://musafirtrips.com",
  },
  {
    num: "02",
    name: "exac.draw",
    desc: "Collaborative whiteboard built as a Turborepo monorepo with real-time multi-user canvas sync via WebSockets and persistent state in PostgreSQL.",
    tags: ["Next.js 15", "Turborepo", "WebSockets", "PostgreSQL", "Tailwind"],
    github: "https://github.com/m-taaha/exac.draw",
    live: "https://exac-draw.vercel.app",
  },
  {
    num: "03",
    name: "vidCall",
    desc: "High-performance video conferencing using WebRTC mesh architecture and Socket.io for low-latency peer-to-peer audio/video with screen sharing.",
    tags: ["React", "WebRTC", "Socket.io", "Node.js", "Express"],
    github: "https://github.com/m-taaha/vidCall",
    live: "https://vidcall.vercel.app",
  },
  {
    num: "04",
    name: "Kids Portal",
    desc: "Interactive learning platform with a custom Stitcher logic compiler, branching narrative engine, and FastAPI backend for concurrent student data.",
    tags: ["FastAPI", "Python", "React", "InkJS", "MySQL"],
    github: "https://gitlab.com/m-taaha/kidsportal",
    live: null,
  },
  {
    num: "05",
    name: "Nitpick",
    desc: "GitHub App that reviews PRs automatically via a webhook → BullMQ queue → AI worker pipeline using Octokit for GitHub API integration.",
    tags: ["BullMQ", "Octokit", "LLM", "TypeScript", "Node.js"],
    github: "https://github.com/m-taaha/nitpick",
    live: null,
  },
];

export const openSource = {
  name: "CropChain",
  event: "Aperture 2.0",
  desc: "Transformed an unprotected backend route into a secure, production-ready API with a three-layer validation and automated testing framework.",
  tags: ["Node.js", "Express", "Joi", "Jest", "Supertest"],
  github: "https://github.com/m-taaha/cropchain",
};

export const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend & Realtime",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Socket.io",
      "WebRTC",
      "WebSockets",
    ],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Docker", "Turborepo", "Git", "Nginx", "Vercel", "Jest", "pnpm"],
  },
];

export const links = [
  {
    label: "GitHub",
    value: "m-taaha",
    href: "https://github.com/m-taaha",
  },
  {
    label: "LinkedIn",
    value: "mohammad-taaha-ashraf",
    href: "https://linkedin.com/in/mohammad-taaha-ashraf",
  },
  {
    label: "X / Twitter",
    value: "_mohammadtaaha",
    href: "https://x.com/_mohammadtaaha",
  },
  {
    label: "Email",
    value: "mtaahaashraf@gmail.com",
    href: "mailto:mtaahaashraf@gmail.com",
  },
];

export const CONTRIB_SEED = [
  0, 0, 1, 0, 2, 0, 1, 3, 0, 1, 2, 0, 1, 0, 2, 3, 1, 0, 2, 1, 0, 3, 2, 1, 0, 2,
  0, 1, 2, 3, 0, 1, 2, 0, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 1, 2, 0,
  1, 3, 2, 0, 1, 2, 3, 1, 0, 2, 1, 3, 2, 0, 1, 3, 2, 0, 1, 2, 0, 3, 1, 2, 0, 2,
  1, 3, 0, 2, 1, 0, 3, 2, 0, 1, 2, 4, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 1, 3, 2, 0,
  1, 3, 2, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0, 1, 2, 3, 0, 1, 0, 2, 3, 0,
  1, 2, 0, 3, 2, 1, 0, 2, 3, 1, 0, 2, 1, 3, 0, 2, 1, 0, 3, 4, 2, 0, 1, 0, 3, 2,
  1, 0, 2, 3, 1, 0, 3, 4, 2, 1, 0, 2, 3, 4, 2, 0, 1, 2, 3, 0, 1, 0, 2, 1, 3, 0,
  4, 2, 1, 0, 2, 3, 1, 4, 0, 2, 1, 0, 3, 4, 2, 1, 0, 2, 4, 3, 0, 1, 2, 0, 1, 3,
  4, 2, 0, 1, 3, 4, 2, 0, 1, 2, 3, 4, 2, 0, 1, 3, 4, 2, 0, 1, 3, 0, 4, 2, 1, 0,
  3, 4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 2, 1, 4, 0, 3, 2, 1, 0, 3, 2, 4, 2, 1, 0, 3,
  4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 4, 0, 0, 1, 2, 3,
  0, 1, 2, 0, 3, 4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 4, 0, 0, 1, 2, 0,
  1, 3, 0, 2, 1, 3, 4, 0, 2, 1, 3, 4, 2, 1, 0, 3, 4, 2, 1, 0, 3, 4,
];
