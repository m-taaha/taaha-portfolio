import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/app/components/ui/Container";
import { ProjectsGrid } from "@/app/components/sections/Projects/ProjectsGrid";
import { Navbar } from "@/app/components/navigation/Navbar";
import { Footer } from "@/app/components/sections/Footer/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Mohammad Taaha Ashraf's frontend, full stack, and AI engineering projects.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Container>
        <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
          <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-brand-primary">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>

          <header className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">Selected work</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">Projects built to solve real problems.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Browse across frontend experiences, full stack products, and AI powered tools. Each project includes the technologies and source links available.
            </p>
          </header>

          <ProjectsGrid />
        </div>
      </Container>
      <Footer />
    </main>
  );
}
