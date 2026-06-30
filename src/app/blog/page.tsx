import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software, AI, and building things.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software, AI, and building things.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software, AI, and building things.",
  },
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <LayoutWrapper>
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Blog{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {posts.length} posts
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Thoughts on software, AI, and building things.
        </p>
      </BlurFade>

      {posts.length > 0 ? (
        <div className="flex flex-col gap-3">
          {posts.map((post, id) => (
            <BlurFade key={post._meta.path} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
              <Link
                href={`/blog/${post._meta.path}`}
                className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-base font-semibold leading-snug group-hover:underline">
                    {post.title}
                  </h2>
                  <time className="flex-none text-xs tabular-nums text-muted-foreground">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.summary}
                </p>
              </Link>
            </BlurFade>
          ))}
        </div>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
    </LayoutWrapper>
  );
}
