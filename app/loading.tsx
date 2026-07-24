export default function Loading() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className="
            h-12
            w-12
            animate-spin
            rounded-full
            border-4
            border-border-subtle
            border-t-brand-primary
          "
        />

        <p className="text-text-secondary">Loading...</p>
      </div>
    </main>
  );
}
