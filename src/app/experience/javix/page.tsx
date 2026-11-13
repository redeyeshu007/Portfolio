import BlurFade from "@/components/magicui/blur-fade";
import LayoutWrapper from "@/components/layout-wrapper";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  ExternalLink,
  FolderGit2,
  Globe,
  Layers,
  MapPin,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Javix Technologies Experience",
  description:
    "Full Stack Developer Internship experience of Sudharsan at Javix Technologies — responsibilities, contributions, technologies, and achievements.",
  openGraph: {
    title: "Javix Technologies Experience | Sudharsan",
    description:
      "Full Stack Developer Internship experience of Sudharsan at Javix Technologies — responsibilities, contributions, technologies, and achievements.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javix Technologies Experience | Sudharsan",
    description:
      "Full Stack Developer Internship experience of Sudharsan at Javix Technologies — responsibilities, contributions, technologies, and achievements.",
  },
};

const BLUR_FADE_DELAY = 0.04;

const RESPONSIBILITIES = [
  {
    icon: Code2,
    title: "Frontend Architecture & Responsive UI",
    description:
      "Architecting and building responsive, accessible, mobile-first user interfaces using React.js and Next.js. Translating design specifications into modular, reusable UI components with polished interactive states.",
  },
  {
    icon: Server,
    title: "Backend Services & RESTful API Engineering",
    description:
      "Developing and testing secure, high-throughput RESTful endpoints using Node.js and Express. Implementing request validation layers, authentication workflows, business logic, and structured JSON responses.",
  },
  {
    icon: Database,
    title: "Database Integration & Schema Optimization",
    description:
      "Modeling schemas and integrating relational and NoSQL databases including MongoDB and PostgreSQL. Writing efficient queries and indexing strategies to ensure transactional integrity and low-latency data access.",
  },
  {
    icon: ShieldCheck,
    title: "System Debugging & Performance Optimization",
    description:
      "Profiling web client performance, eliminating unnecessary re-renders, minimizing API response payloads, and diagnosing edge-case defects across frontend and backend environments.",
  },
  {
    icon: Users,
    title: "Agile Team Collaboration & Code Quality",
    description:
      "Participating in daily standup discussions, sprint reviews, and technical design meetings. Conducting code reviews, adhering to git branching workflows, and collaborating closely with senior engineers and QA testers.",
  },
];

const CONTRIBUTIONS = [
  {
    title: "Reusable Type-Safe Component Library",
    description:
      "Engineered modular, reusable UI components in TypeScript that standardized UI patterns and accelerated feature delivery across new platform pages.",
  },
  {
    title: "End-to-End API Integration & State Sync",
    description:
      "Connected client-side interfaces to backend microservices, implementing resilient async state handling, error boundaries, and optimistic UI updates.",
  },
  {
    title: "API & Database Query Optimization",
    description:
      "Refactored critical API endpoints and database queries, decreasing payload sizes and improving data fetching response times across user workflows.",
  },
  {
    title: "Code Quality & Resilient Architecture",
    description:
      "Enforced strict TypeScript types, structured error logging, and comprehensive API response contracts to maintain codebase resilience.",
  },
];

const JAVIX_PROJECT_SLUGS = [
  "roohae-cards",
  "sabari-hospital",
  "pavan-vela-grand",
  "eastgold",
  "handoverly-ai",
];

const JAVIX_PROJECTS = JAVIX_PROJECT_SLUGS.map((slug) =>
  DATA.projects.find((p) => p.slug === slug)
).filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Production Feature Deployment",
    description:
      "Successfully developed, tested, and shipped core production features deployed to active applications utilized by real end users.",
  },
  {
    icon: Rocket,
    title: "Rapid Onboarding & Technical Autonomy",
    description:
      "Quickly ramped up on company codebases, workflows, and standards, taking independent ownership of full-stack feature deliverables.",
  },
  {
    icon: Sparkles,
    title: "High Code Quality & Reliability",
    description:
      "Championed TypeScript strict type safety, modular design principles, and comprehensive edge-case testing across assigned project repositories.",
  },
];

export default function JavixExperiencePage() {
  return (
    <LayoutWrapper>
      <div className="space-y-10">
        {/* Top Back Navigation */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Work Experience</span>
          </Link>
        </BlurFade>

        {/* Hero Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-6 border-b border-border">
            <div className="relative size-16 sm:size-20 p-2.5 border rounded-2xl shadow ring-2 ring-border overflow-hidden bg-background flex items-center justify-center flex-none">
              <img
                src="/javix.png"
                alt="Javix Technologies"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Javix Technologies
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Internship
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">
                Full Stack Developer Intern
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  <Calendar className="size-3" />
                  2026 – Present
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  <MapPin className="size-3" />
                  On-site
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  <Briefcase className="size-3" />
                  Internship
                </span>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Overview Callout */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Building2 className="size-4 text-primary" />
              <span>Role Overview</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Contributing to the development of modern web applications by working across both frontend and backend technologies. Developing responsive user interfaces, implementing backend APIs, integrating databases, and collaborating with the development team to deliver scalable software solutions. Gaining hands-on experience with full-stack development, software architecture, debugging, deployment, and industry best practices while working on real-world projects.
            </p>
          </div>
        </BlurFade>

        {/* Quick Facts Grid */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Code2 className="size-3.5 text-primary" />
                <span>Role</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                Full Stack Intern
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Layers className="size-3.5 text-primary" />
                <span>Scope</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                Frontend & Backend
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                <span>Location</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                On-site
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-primary" />
                <span>Duration</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                2026 – Present
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Core Responsibilities */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Core Responsibilities
              </h2>
            </div>
            <div className="grid gap-3">
              {RESPONSIBILITIES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-border/80 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-secondary text-primary flex-none mt-0.5">
                    <item.icon className="size-4" />
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Key Contributions & Impact */}
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Key Contributions & Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTRIBUTIONS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 flex-none" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Projects Worked On */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Projects & Workstreams
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full auto-rows-fr">
              {JAVIX_PROJECTS.map((project, id) => (
                <BlurFade
                  key={`${project.slug}-${id}`}
                  delay={BLUR_FADE_DELAY * 7 + id * 0.04}
                  className="h-full flex"
                >
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    video={project.video}
                    image={project.image}
                    from="/experience/javix"
                    className="w-full"
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Key Achievements */}
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Key Achievements & Milestones
            </h2>
            <div className="grid gap-3">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.title}
                  className="rounded-xl border border-border bg-card p-4 sm:p-4.5 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-none mt-0.5">
                    <ach.icon className="size-4" />
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {ach.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Bottom Navigation */}
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all work experience</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              <span>Explore all projects</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </LayoutWrapper>
  );
}

