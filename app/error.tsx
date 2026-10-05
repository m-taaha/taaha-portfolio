"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  console.error(error);

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
          <span>taaha.dev / runtime</span>
          <span className="ml-auto text-error">error</span>
        </div>
        <div className="p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-error">
            Something went wrong
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Unexpected Error
          </h1>

          <p className="mt-5 max-w-lg leading-7 text-text-secondary">
            An unexpected error occurred while loading this page. You can retry the current view.
          </p>

          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            Restart view
          </button>
        </div>
      </div>
    </main>
  );
}
