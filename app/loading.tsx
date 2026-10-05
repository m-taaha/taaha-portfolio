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
      <div className="os-panel w-full max-w-sm overflow-hidden rounded-[1.6rem]">
        <div className="os-window-bar">
          <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
          <span>taaha.dev / boot</span>
          <span className="ml-auto text-brand-primary">starting</span>
        </div>
        <div className="p-7 sm:p-8" aria-live="polite">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-brand-primary/25 bg-brand-primary/10 font-mono font-semibold text-brand-primary">
              t.
            </div>
            <div>
              <p className="font-medium text-text-primary">Opening workspace</p>
              <p className="mt-1 font-mono text-xs text-text-muted">loading portfolio modules...</p>
            </div>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-bg-elevated">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-brand-primary" />
          </div>
        </div>
      </div>
    </main>
  );
}
