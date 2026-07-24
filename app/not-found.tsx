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
      <div className="max-w-xl text-center">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-brand-primary
          "
        >
          404
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Page Not Found
        </h1>

        <p
          className="
            mt-6
            leading-8
            text-text-secondary
          "
        >
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex
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
            hover:border-brand-primary/50
          "
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
