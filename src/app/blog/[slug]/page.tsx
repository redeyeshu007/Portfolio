import BlurFade from "@/components/magicui/blur-fade";
import { mdxComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import LayoutWrapper from "@/components/layout-wrapper";

const BLUR_FADE_DELAY = 0.04;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._meta.path }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path === slug);

  if (!post) notFound();

  return (
    <LayoutWrapper>
    <article>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/blog"
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden />
          Back to blog
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <header className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            {post.author ? <span>· {post.author}</span> : null}
          </div>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="prose max-w-full text-pretty font-sans dark:prose-invert">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </div>
      </BlurFade>
    </article>
    </LayoutWrapper>
  );
}
