import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-6
      "
    >
      <div className="os-panel w-full max-w-xl overflow-hidden rounded-[1.6rem] text-left">
        <div className="os-window-bar">
          <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
          <span>taaha.dev / route</span>
          <span className="ml-auto text-brand-primary">404</span>
        </div>
        <div className="p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary">
            Route not found
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            This page isn’t here.
          </h1>

          <p className="mt-5 max-w-lg leading-7 text-text-secondary">
            The address may be outdated, or the page may have moved. Return to the portfolio workspace to keep exploring.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl border border-brand-primary/30 bg-brand-primary/10 px-5 py-3 text-sm font-medium text-brand-soft transition hover:-translate-y-0.5 hover:border-brand-primary/50 hover:bg-brand-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
