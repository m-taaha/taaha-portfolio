export type Role =  "Software Engineer";

export interface Person {
  readonly name: string;
  readonly role: Role;
  readonly heroMessages: readonly string[];
  readonly email: string;
  readonly github: string;

  linkedin?: string;
  twitter?: string;
  location?: string;
  shortBio?: string;
  resumeUrl?: string;
  avatar?: string;
}

export const person: Person = {
  name: "Mohammd Taaha Ashraf",
  role: "Software Engineer",
  heroMessages: [
  "Building AI Products",
  "Designing Scalable Systems",
  "Turning Ideas into Products",
  "Learning Through Building",
],
  email: "mtaahaashraf@gmail.com",
  github: "https://github.com/m-taaha",
};