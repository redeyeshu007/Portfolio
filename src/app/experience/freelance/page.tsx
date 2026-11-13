import BlurFade from "@/components/magicui/blur-fade";
import LayoutWrapper from "@/components/layout-wrapper";
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
  Layout,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Freelance Experience | Self-Employed",
  description:
    "Freelance Web & App Developer experience of Sudharsan — building custom digital solutions, full-stack web platforms, mobile apps, and client projects.",
  openGraph: {
    title: "Freelance Experience | Sudharsan",
    description:
      "Freelance Web & App Developer experience of Sudharsan — building custom digital solutions, full-stack web platforms, mobile apps, and client projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Experience | Sudharsan",
    description:
      "Freelance Web & App Developer experience of Sudharsan — building custom digital solutions, full-stack web platforms, mobile apps, and client projects.",
  },
};

const BLUR_FADE_DELAY = 0.04;

const RESPONSIBILITIES = [
  {
    icon: Layout,
    title: "End-to-End Client Project Delivery",
    description:
      "Leading projects across the entire development lifecycle from initial discovery and requirements scoping to UI/UX design, full-stack engineering, testing, production deployment, and client handoff.",
  },
  {
    icon: Code2,
    title: "Custom Full-Stack Web Development",
    description:
      "Architecting and building responsive, accessible web applications using React.js, Next.js, Node.js, and Java. Crafting polished frontend interfaces and performant backend services tailored to client specifications.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile App Engineering",
    description:
      "Designing and developing native-feel mobile applications with Flutter and Dart, integrating RESTful backend APIs, state management, local storage caching, and fluid touch interactions.",
  },
  {
    icon: Database,
    title: "Database Modeling & Cloud Infrastructure",
    description:
      "Designing schemas for MongoDB, MySQL, and PostgreSQL. Configuring cloud hosting platforms (Vercel, Netlify), setting up custom domains, SSL certificates, automated CI/CD pipelines, and media optimization via Cloudinary.",
  },
  {
    icon: Users,
    title: "Client Consultation, Scoping & Support",
    description:
      "Collaborating directly with business owners to translate commercial goals into technical specifications. Providing ongoing maintenance, post-launch feature expansions, and proactive performance optimizations.",
  },
];

const CONTRIBUTIONS = [
  {
    title: "Commercial & Client Projects Shipped",
    description:
      "Successfully delivered diverse digital solutions including hotel booking systems, healthcare hospital portals, precious metal showcases, and productivity tools.",
  },
  {
    title: "Direct Client Collaboration & Scoping",
    description:
      "Maintained 100% direct communication with clients, delivering clear architectural proposals, iterative milestone previews, and on-time final releases.",
  },
  {
    title: "Full Infrastructure & Media Optimization",
    description:
      "Configured automated deployments, DNS records, and Cloudinary media pipelines with auto-format and auto-quality transformations for fast page load times.",
  },
  {
    title: "Production Reliability & Post-Launch Support",
    description:
      "Provided ongoing technical consultation, database backups, SEO enhancements, and feature upgrades ensuring long-term application stability.",
  },
];

const FREELANCE_PROJECT_SLUGS = [
  "aura-de-addiction-centre",
  "jaishree-real-estate",
];

const FREELANCE_PROJECTS = FREELANCE_PROJECT_SLUGS.map((slug) =>
  DATA.projects.find((p) => p.slug === slug)
).filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Independent Commercial Portfolio",
    description:
      "Built a diverse client portfolio across hospitality, healthcare, retail, and tech industries with direct commercial deployments.",
  },
  {
    icon: Rocket,
    title: "Complete Project Autonomy",
    description:
      "Successfully owned every stage of client engagements from initial pitch and UI prototyping to production hosting and domain configuration.",
  },
  {
    icon: Sparkles,
    title: "Repeat Clients & High Trust",
    description:
      "Maintained long-term client trust through transparent communication, rapid iteration cycles, and high code quality standards.",
  },
];

export default function FreelanceExperiencePage() {
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
                src="/freelancer_thick_font_logo.png"
                alt="Self-Employed Freelance"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Self-Employed
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Practice
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">
                Freelance Web & App Developer
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  <Calendar className="size-3" />
                  2024 – Present
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  <Globe className="size-3" />
                  Remote
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  <Briefcase className="size-3" />
                  Client Services & Consulting
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
              <span>Practice Overview</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Built websites, web applications, and digital solutions for clients across different industries. Managed projects from requirements gathering and UI design to development, deployment, and maintenance. Developed full-stack applications using modern technologies including React.js, Node.js, Java, MySQL, and MongoDB. Collaborated directly with clients to translate business needs into scalable software solutions while ensuring performance, usability, and reliability. Delivered ongoing support, feature enhancements, and technical consultation throughout the project lifecycle.
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
                Freelance Developer
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Layers className="size-3.5 text-primary" />
                <span>Specialization</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                Web & Mobile Apps
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Globe className="size-3.5 text-primary" />
                <span>Model</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                Remote & Direct Client
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-primary" />
                <span>Duration</span>
              </div>
              <div className="text-sm font-semibold text-foreground">
                2024 – Present
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Core Responsibilities */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Core Responsibilities & Workflow
            </h2>
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
              Key Contributions & Value Delivered
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

        {/* Featured Client Projects */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Featured Client Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full auto-rows-fr">
              {FREELANCE_PROJECTS.map((project, id) => (
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
                    from="/experience/freelance"
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

