/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { slugify } from "@/data/resume";

function getOptimizedVideoSources(rawUrl: string) {
  if (rawUrl.includes("res.cloudinary.com") && rawUrl.includes("/video/upload/")) {
    const videoUrl = rawUrl.includes("/f_auto")
      ? rawUrl
      : rawUrl.replace("/video/upload/", "/video/upload/f_auto,q_auto,w_800/");
    const posterUrl = rawUrl
      .replace(/\/video\/upload\/(f_auto[^/]+\/)?/, "/video/upload/f_auto,q_auto,w_800,so_0/")
      .replace(/\.[a-zA-Z0-9]+$/, ".jpg");
    return { videoUrl, posterUrl };
  }
  return { videoUrl: rawUrl, posterUrl: undefined };
}

export function ProjectVideo({
  src,
  title,
  aspectRatio = "video",
}: {
  src: string;
  title: string;
  aspectRatio?: "video" | "portrait";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [detectedPortrait, setDetectedPortrait] = useState<boolean | null>(null);

  const isPortrait =
    aspectRatio === "portrait" || detectedPortrait === true;

  const aspectClass = isPortrait ? "aspect-[9/16]" : "aspect-video";

  const { videoUrl, posterUrl } = useMemo(
    () => getOptimizedVideoSources(src),
    [src]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setIsInView(intersecting);
        const video = videoRef.current;
        if (!video) return;

        if (intersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => setHasStartedPlaying(true))
              .catch(() => {
                // Autoplay policy or low power mode handling
              });
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full bg-neutral-950 dark:bg-black/95 overflow-hidden flex items-center justify-center",
        aspectClass
      )}
    >
      <video
        ref={videoRef}
        src={isInView ? videoUrl : undefined}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        preload={isInView ? "metadata" : "none"}
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          if (v.videoWidth && v.videoHeight && v.videoHeight > v.videoWidth * 1.1) {
            setDetectedPortrait(true);
          }
        }}
        onPlaying={() => setHasStartedPlaying(true)}
        className={cn(
          "w-full h-full object-contain transition-all duration-300 group-hover:scale-[1.01]",
          hasStartedPlaying ? "opacity-100" : "opacity-95"
        )}
        aria-label={`${title} preview video`}
      />
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  aspectRatio = "video",
}: {
  src: string;
  alt: string;
  aspectRatio?: "video" | "portrait";
}) {
  const [imageError, setImageError] = useState(false);
  const aspectClass =
    aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video";

  if (!src || imageError) {
    return (
      <div
        className={cn(
          "w-full bg-neutral-950 dark:bg-black/95 flex flex-col items-center justify-center gap-2 text-muted-foreground/40",
          aspectClass
        )}
      >
        <Code2 className="size-8 stroke-[1.5]" />
        <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground/60">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full h-full bg-neutral-950 dark:bg-black/95 flex items-center justify-center overflow-hidden",
        aspectClass
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

function ProjectMedia({
  video,
  image,
  title,
  aspectRatio = "video",
}: {
  video?: string;
  image?: string;
  title: string;
  aspectRatio?: "video" | "portrait";
}) {
  if (video) {
    return (
      <ProjectVideo
        src={video}
        title={title}
        aspectRatio={aspectRatio}
      />
    );
  }
  if (image) {
    return (
      <ProjectImage
        src={image}
        alt={title}
        aspectRatio={aspectRatio}
      />
    );
  }
  const aspectClass =
    aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video";
  return (
    <div
      className={cn(
        "w-full bg-neutral-950 dark:bg-black/95 flex flex-col items-center justify-center gap-2 text-muted-foreground/40",
        aspectClass
      )}
    >
      <Code2 className="size-8 stroke-[1.5]" />
      <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground/60">
        Project Preview
      </span>
    </div>
  );
}

interface Props {
  title: string;
  slug?: string;
  href?: string;
  description?: string;
  dates?: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  from?: string;
  aspectRatio?: "video" | "portrait";
}

export function ProjectCard({
  title,
  slug,
  image,
  video,
  from,
  className,
  aspectRatio = "video",
}: Props) {
  const targetSlug = slug || slugify(title);
  const detailUrl = from
    ? `/projects/${targetSlug}?from=${encodeURIComponent(from)}`
    : `/projects/${targetSlug}`;

  const aspectClass =
    aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video";

  return (
    <Link
      href={detailUrl}
      className={cn(
        "group flex flex-col w-full h-full rounded-2xl border border-border/80 bg-card overflow-hidden transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer",
        className
      )}
    >
      {/* Video Preview */}
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-border/50 bg-neutral-950 dark:bg-black/95",
          aspectClass
        )}
      >
        <ProjectMedia
          video={video}
          image={image}
          title={title}
          aspectRatio={aspectRatio}
        />
      </div>

      {/* Project Title directly below video */}
      <div className="p-3.5 sm:p-5 flex items-center justify-between gap-2.5 sm:gap-3 flex-1 bg-card">
        <h3 className="font-semibold text-sm sm:text-base text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {title}
        </h3>
        <ArrowUpRight
          className="size-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
          aria-hidden
        />
      </div>
    </Link>
  );
}
