

interface StatusBadgeProps {
  status: string;
}




export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-3 py-1">
      <div className="h-2 w-2 rounded-full bg-green-500" />

      <span className="text-sm text-text-secondary">{status}</span>
    </div>
  );
}

