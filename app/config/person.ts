export type Title = "Software Engineer";

export interface Person {
  readonly name: string;
  readonly title: Title;
  readonly heroMessages: readonly string[];
  readonly email: string;
  readonly github: string;

  readonly status: string;
  readonly skills: readonly string[];

  linkedin?: string;
  twitter?: string;
  location?: string;
  shortBio?: string;
  resumeUrl?: string;
  readonly avatar: string;
}

export const person: Person = {
  name: "Mohammad Taaha Ashraf",
  title: "Software Engineer",
  heroMessages: [
    "Building AI Products",
    "Designing Scalable Systems",
    "Turning Ideas into Products",
    "Learning Through Building",
  ],
  email: "mtaahaashraf@gmail.com",
  github: "https://github.com/m-taaha",
  shortBio:
    "I build scalable web applications and AI-powered products while continuously exploring software architecture and backend systems.",
  avatar: "/images/profile-v2.png",

  status: "Available for Work",
  skills: ["Next.js", "TypeScript", "Node.js", "Python", "C++", "AI"] as const,
};
