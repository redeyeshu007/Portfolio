/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import LayoutWrapper from "@/components/layout-wrapper";
import { Icons } from "@/components/icons";
import { ProjectBackButton } from "@/components/project-back-button";
import { DATA, getProjectBySlug, slugify } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  Globe,
  Layers,
  Lightbulb,
  Sparkles,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function getBackNavigation(from?: string) {
  if (!from) {
    return {
      href: "/projects",
      topLabel: "Back to Projects",
      bottomLabel: "Back to all projects",
    };
  }

  if (from.includes("/experience/javix")) {
    return {
      href: "/experience/javix",
      topLabel: "Back to Javix Internship",
      bottomLabel: "Back to Javix Internship",
    };
  }

  if (from.includes("/experience/freelance")) {
    return {
      href: "/experience/freelance",
      topLabel: "Back to Freelance Experience",
      bottomLabel: "Back to Freelance Experience",
    };
  }

  if (from === "/" || from.startsWith("/#")) {
    return {
      href: from,
      topLabel: "Back to Home",
      bottomLabel: "Back to Home",
    };
  }

  return {
    href: from,
    topLabel: "Back",
    bottomLabel: "Back",
  };
}

export function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Projects`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Projects`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const from = resolvedSearchParams?.from;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { href: backHref, topLabel, bottomLabel } = getBackNavigation(from);

  const award = "award" in project ? (project.award as string | undefined) : undefined;
  const problemSolution =
    "problemSolution" in project
      ? (project.problemSolution as
          | { problem: string; solution: string; problemTitle?: string; solutionTitle?: string }
          | undefined)
      : undefined;
  const architectureTitle =
    "architectureTitle" in project
      ? (project.architectureTitle as string | undefined)
      : undefined;
  const architectureSubtitle =
    "architectureSubtitle" in project
      ? (project.architectureSubtitle as string | undefined)
      : undefined;
  const architectureBadge =
    "architectureBadge" in project
      ? (project.architectureBadge as string | undefined)
      : undefined;
  const agents =
    "agents" in project
      ? (project.agents as
          | readonly { name: string; role: string; description: string }[]
          | undefined)
      : undefined;
  const workflow =
    "workflow" in project
      ? (project.workflow as
          | readonly { step: string; title: string; description: string }[]
          | undefined)
      : undefined;
  const techStackCategories =
    "techStackCategories" in project
      ? (project.techStackCategories as
          | readonly { category: string; skills: readonly string[] }[]
          | undefined)
      : undefined;
  const team =
    "team" in project
      ? (project.team as
          | { name: string; members: readonly { name: string; role: string }[] }
          | undefined)
      : undefined;

  // Derive links
  const projectLinks = project.links as
    | readonly { type: string; href: string }[]
    | undefined;

  const liveUrl =
    project.href ||
    projectLinks?.find(
      (l) =>
        l.type.toLowerCase().includes("website") ||
        l.type.toLowerCase().includes("live") ||
        l.type.toLowerCase().includes("demo")
    )?.href;

  const rawGithub = (project as { github?: string }).github;
  const githubUrl =
    rawGithub ||
    projectLinks?.find(
      (l) =>
        l.type.toLowerCase().includes("github") ||
        l.type.toLowerCase().includes("source") ||
        l.type.toLowerCase().includes("code")
    )?.href;

  return (
    <LayoutWrapper className="max-w-4xl">
      <div className="space-y-10">
        {/* Top Back Navigation */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <ProjectBackButton
            href={backHref}
            label={topLabel}
            variant="top"
          />
        </BlurFade>

        {/* Project Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-4 pb-6 border-b border-border">
            {award && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-xs">
                  <Trophy className="size-3.5 sm:size-4 text-amber-500" />
                  <span>{award}</span>
                </span>
              </div>
            )}

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              {project.title}
            </h1>

            {/* External Action Links (Live Demo & GitHub) */}
            {(liveUrl || githubUrl) && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <Globe className="size-4" />
                    <span>Live Demo</span>
                    <ExternalLink className="size-3.5 opacity-80" />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-card hover:bg-secondary text-foreground transition-all shadow-sm"
                  >
                    <Icons.github className="size-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="size-3.5 opacity-80" />
                  </a>
                )}
              </div>
            )}
          </div>
        </BlurFade>

        {/* Project Image Preview (if image exists) */}
        {project.image && (
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-neutral-950 dark:bg-black/95 shadow-xl flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </BlurFade>
        )}

        {/* Project Description */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-7 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm sm:text-base">
              <FileText className="size-4.5 text-primary" />
              <span>Project Overview</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </BlurFade>

        {/* The Business Challenge vs Autonomous Solution */}
        {problemSolution && (
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5 sm:p-6 space-y-2.5 shadow-xs">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-sm sm:text-base">
                  <AlertCircle className="size-4.5" />
                  <span>{problemSolution.problemTitle || "The Business Challenge"}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {problemSolution.problem}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6 space-y-2.5 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                  <Lightbulb className="size-4.5" />
                  <span>{problemSolution.solutionTitle || "The Autonomous Multi-Agent Solution"}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {problemSolution.solution}
                </p>
              </div>
            </div>
          </BlurFade>
        )}

        {/* Specialized Multi-Agent Architecture */}
        {agents && agents.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-bold text-xl">
                  <Bot className="size-5 text-primary" />
                  <h2>{architectureTitle || "5 Specialized AI Agents Architecture"}</h2>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {architectureSubtitle || "Orchestrated by the central Master Planner through LangGraph, each agent takes ownership of a dedicated department with stateful context handoffs."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {agents.map((agent, i) => (
                  <div
                    key={agent.name}
                    className="rounded-xl border border-border bg-card/60 p-4 space-y-2 hover:border-primary/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="text-[11px] font-mono font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
                          {architectureBadge || "Agent"} 0{i + 1}
                        </span>
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground pt-1">
                        {agent.name}
                      </h3>
                      <p className="text-[11px] font-medium text-primary/80">
                        {agent.role}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* End-to-End Workflow */}
        {workflow && workflow.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-bold text-xl">
                <Workflow className="size-5 text-primary" />
                <h2>End-to-End Execution Pipeline</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {workflow.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl border border-border bg-card/40 p-4 space-y-2 hover:border-border/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="size-6 rounded-md bg-primary/10 flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0">
                        {item.step}
                      </span>
                      <h3 className="font-semibold text-xs sm:text-sm text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Key Features & Functionalities */}
        {project.features && project.features.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="size-5 text-primary" />
                <h2 className="text-xl font-bold tracking-tight">
                  Key Features & Functionalities
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-card/60 p-4 flex items-start gap-3 hover:border-border/80 transition-colors"
                  >
                    <span className="size-2 rounded-full bg-emerald-500 mt-2 flex-none" />
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Categorized Tech Stack & Technologies */}
        {techStackCategories && techStackCategories.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-bold text-xl">
                <Layers className="size-5 text-primary" />
                <h2>Full Technology Stack Architecture</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {techStackCategories.map((cat) => (
                  <div
                    key={cat.category}
                    className="rounded-xl border border-border bg-card/60 p-4 space-y-2.5"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {cat.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Technologies & Tools Used (Badges) */}
        {project.technologies && project.technologies.length > 0 && !techStackCategories && (
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-3.5">
              <div className="flex items-center gap-2 text-foreground">
                <Layers className="size-5 text-primary" />
                <h2 className="text-xl font-bold tracking-tight">
                  Technologies & Tools Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="border bg-background border-border ring-2 ring-border/20 rounded-xl min-h-[30px] sm:min-h-8 h-auto px-2.5 sm:px-3.5 py-1 flex items-center text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 transition-colors whitespace-nowrap"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Additional Screenshots or Images (if available) */}
        {project.image && project.video && (
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-3.5">
              <div className="flex items-center gap-2 text-foreground">
                <Sparkles className="size-5 text-primary" />
                <h2 className="text-xl font-bold tracking-tight">
                  Additional Screenshots & Media
                </h2>
              </div>
              <div className="rounded-2xl border border-border overflow-hidden bg-card p-2 sm:p-4 shadow-sm">
                <img
                  src={project.image}
                  alt={`${project.title} visual`}
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
          </BlurFade>
        )}

        {/* Project Team & Collaborators */}
        {team && (
          <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
                <div className="flex items-center gap-2.5 text-foreground font-bold text-base sm:text-lg">
                  <Users className="size-5 text-primary" />
                  <span>Team: {team.name}</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground px-2.5 py-0.5 rounded-full bg-secondary border border-border w-fit">
                  {team.members.length} Members
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {team.members.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl border border-border/80 bg-background/60 p-3 sm:p-3.5 flex items-center justify-between gap-2.5 sm:gap-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 border border-primary/20">
                        {member.name.charAt(0)}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                        {member.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-secondary text-muted-foreground shrink-0 border border-border/50">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Bottom Navigation */}
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-3">
            <ProjectBackButton
              href={backHref}
              label={bottomLabel}
              variant="bottom"
            />
            {from && from !== "/projects" && (
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary"
              >
                <span>View all projects</span>
              </Link>
            )}
          </div>
        </BlurFade>
      </div>
    </LayoutWrapper>
  );
}

