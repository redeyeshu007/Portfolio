export default function BlogLoading() {
  return (
    <section id="blog" aria-busy="true">
      <div className="mb-2 flex items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <span className="size-4 animate-spin rounded-full border-2 border-muted border-t-foreground" />
      </div>
      <div className="mb-8 h-4 w-64 max-w-full animate-pulse rounded bg-muted" />

      <div className="flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-3 w-20 animate-pulse rounded bg-muted" />
            </div>
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-3 w-4/5 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </section>
  );
}
