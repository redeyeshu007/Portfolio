import BlurFade from "@/components/magicui/blur-fade";
import { chapters } from "@/data/comeback";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import LayoutWrapper from "@/components/layout-wrapper";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);

  if (!chapter) return {};

  return {
    title: chapter.title,
    description: chapter.summary,
    openGraph: {
      title: chapter.title,
      description: chapter.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: chapter.title,
      description: chapter.summary,
    },
  };
}

export default async function ComebackChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);

  if (!chapter) notFound();

  return (
    <LayoutWrapper>
    <article>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/comeback"
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden />
          Back to The Comeback
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <header className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {chapter.title}
          </h1>
          <p className="text-sm text-muted-foreground">{chapter.summary}</p>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="prose max-w-full text-pretty font-sans dark:prose-invert">
          {chapter.content.map((paragraph, id) => (
            <p key={id}>{paragraph}</p>
          ))}
        </div>
      </BlurFade>
    </article>
    </LayoutWrapper>
  );
}
