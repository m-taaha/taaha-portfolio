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
      <div className="max-w-xl text-center">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-brand-primary
          "
        >
          Something went wrong
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Unexpected Error
        </h1>

        <p
          className="
            mt-6
            leading-8
            text-text-secondary
          "
        >
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={reset}
          className="
            mt-10
            rounded-full
            border
            border-brand-primary/30
            bg-brand-primary/10
            px-6
            py-3
            font-medium
            text-brand-primary
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
