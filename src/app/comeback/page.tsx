import BlurFade from "@/components/magicui/blur-fade";
import { chapters } from "@/data/comeback";
import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "The Comeback",
  description: "My story — where I started, what broke me, and how far I'm willing to go.",
  openGraph: {
    title: "The Comeback",
    description: "My story — where I started, what broke me, and how far I'm willing to go.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Comeback",
    description: "My story — where I started, what broke me, and how far I'm willing to go.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ComebackPage() {
  return (
    <LayoutWrapper>
    <section id="comeback">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          The Comeback{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {chapters.length} chapters
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          The comeback is not a single achievement—it&apos;s the decision to
          keep moving forward, no matter the obstacles.
        </p>
      </BlurFade>

      <div className="flex flex-col gap-3">
        {chapters.map((chapter, id) => (
          <BlurFade key={chapter.slug} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
            <Link
              href={`/comeback/${chapter.slug}`}
              className="group flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50"
            >
              <h2 className="text-base font-semibold leading-snug group-hover:underline">
                {chapter.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {chapter.summary}
              </p>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
    </LayoutWrapper>
  );
}
