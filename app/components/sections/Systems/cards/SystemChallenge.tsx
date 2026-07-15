interface SystemChallengeProps {
  problem: string;
  solution: string;
}

export function SystemChallenge({ problem, solution }: SystemChallengeProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-red-500" />

          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Challenge
          </h4>
        </div>

        <p className="leading-8 text-text-secondary">{problem}</p>
      </div>

      <div className="border-l border-border-subtle pl-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Solution
            </h4>
          </div>

          <p className="leading-8 text-text-secondary">{solution}</p>
        </div>
      </div>
    </section>
  );
}
