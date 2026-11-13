"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ProjectBackButton({
  href,
  label,
  variant = "top",
}: {
  href?: string;
  label?: string;
  variant?: "top" | "bottom";
}) {
  const router = useRouter();

  const targetHref = href || "/projects";
  const targetLabel =
    label || (variant === "top" ? "Back to Projects" : "Back to all projects");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If no explicit href, attempt to pop browser history
    if (!href && typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  if (variant === "bottom") {
    return (
      <Link
        href={targetHref}
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-sm font-medium border border-border bg-card hover:bg-accent/50 px-4 py-2 rounded-xl transition-colors group cursor-pointer"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        <span>{targetLabel}</span>
      </Link>
    );
  }

  return (
    <Link
      href={targetHref}
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
    >
      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
      <span>{targetLabel}</span>
    </Link>
  );
}

