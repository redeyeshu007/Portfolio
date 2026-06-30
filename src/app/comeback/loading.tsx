export default function ComebackLoading() {
  return (
    <section id="comeback" aria-busy="true">
      <div className="mb-2 flex items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">The Comeback</h1>
        <span className="size-4 animate-spin rounded-full border-2 border-muted border-t-foreground" />
      </div>
      <div className="mb-8 h-4 w-72 max-w-full animate-pulse rounded bg-muted" />

      <div className="flex flex-col gap-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4"
          >
            <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </section>
  );
}
