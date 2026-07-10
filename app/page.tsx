import { Hero } from "./components/sections/Hero/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center">
      <div className="bg-surface-primary border border-border-subtle rounded-xl p-8 max-w-xl">
        <h1 className="text-4xl font-bold">Portfolio OS</h1>

        <p className="mt-4 text-text-secondary">
          Building AI Products. Designing Scalable Systems.
        </p>

        <button className="mt-8 rounded-lg bg-brand-primary px-5 py-2 text-brand-foreground transition hover:bg-brand-soft">
          Enter Portfolio
        </button>
        <Hero />
      </div>
    </main>
  );
}