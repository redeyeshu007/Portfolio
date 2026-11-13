import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import LayoutWrapper from "@/components/layout-wrapper";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of web applications, AI platforms, mobile apps, and client projects built by Sudharsan.",
  openGraph: {
    title: "Projects | Sudharsan",
    description:
      "A showcase of web applications, AI platforms, mobile apps, and client projects built by Sudharsan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sudharsan",
    description:
      "A showcase of web applications, AI platforms, mobile apps, and client projects built by Sudharsan.",
  },
};

const BLUR_FADE_DELAY = 0.04;

const CORE_SLUGS = [
  "ascendo-ai",
  "mevo-ai",
  "finlog-monitor",
  "annam-daan",
  "ghost-line",
] as const;

const APP_SLUGS = [
  "hacker-news",
  "roi-rules-of-india",
] as const;

const INTERNSHIP_SLUGS = [
  "eastgold",
  "sabari-hospital",
  "pavan-vela-grand",
  "roohae-cards",
  "handoverly-ai",
  "peralagae",
] as const;

const FREELANCE_SLUGS = [
  "aura-de-addiction-centre",
  "jaishree-real-estate",
] as const;

interface ProjectSectionConfig {
  id: string;
  title: string;
  projects: readonly (typeof DATA.projects)[number][];
  aspectRatio?: "video" | "portrait";
  gridCols?: string;
}

export default function ProjectsPage() {
  const coreProjects = CORE_SLUGS.map((slug) =>
    DATA.projects.find((p) => p.slug === slug)
  ).filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

  const appProjects = APP_SLUGS.map((slug) =>
    DATA.projects.find((p) => p.slug === slug)
  ).filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

  const internshipProjects = INTERNSHIP_SLUGS.map((slug) =>
    DATA.projects.find((p) => p.slug === slug)
  ).filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

  const freelanceProjects = FREELANCE_SLUGS.map((slug) =>
    DATA.projects.find((p) => p.slug === slug)
  ).filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

  const categorizedSlugs = new Set<string>([
    ...CORE_SLUGS,
    ...APP_SLUGS,
    ...INTERNSHIP_SLUGS,
    ...FREELANCE_SLUGS,
  ]);

  const otherProjects = DATA.projects.filter(
    (p) => !categorizedSlugs.has(p.slug)
  );

  const sections: ProjectSectionConfig[] = [
    {
      id: "core-projects",
      title: "Core Projects",
      projects: coreProjects,
      aspectRatio: "video",
      gridCols: "grid-cols-1 md:grid-cols-2",
    },
    {
      id: "app-projects",
      title: "App Projects",
      projects: appProjects,
      aspectRatio: "portrait",
      gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    },
    {
      id: "internship-projects",
      title: "Internship Projects",
      projects: internshipProjects,
      aspectRatio: "video",
      gridCols: "grid-cols-1 md:grid-cols-2",
    },
    {
      id: "freelance-projects",
      title: "Freelance Projects",
      projects: freelanceProjects,
      aspectRatio: "video",
      gridCols: "grid-cols-1 md:grid-cols-2",
    },
    ...(otherProjects.length > 0
      ? [
          {
            id: "other-projects",
            title: "Other Projects",
            projects: otherProjects,
            aspectRatio: "video" as const,
            gridCols: "grid-cols-1 md:grid-cols-2",
          },
        ]
      : []),
  ];

  return (
    <LayoutWrapper className="max-w-5xl">
      <section id="projects" className="space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Projects{" "}
              <span className="ml-1 bg-card border border-border rounded-md px-2 py-0.5 text-muted-foreground text-sm font-normal">
                {DATA.projects.length} projects
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              A video showcase of commercial client platforms, AI systems, full-stack applications, and mobile apps. Click any project to explore complete features, source code, and live demos.
            </p>
          </div>
        </BlurFade>

        {/* Categorized Project Sections */}
        <div className="space-y-12">
          {sections.map((section, sectionIdx) => (
            <div key={section.id} id={section.id} className="space-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 2 + sectionIdx * 0.05}>
                <div className="flex items-center gap-2.5 border-b border-border/60 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <span className="text-xs font-mono text-muted-foreground px-2.5 py-0.5 rounded-full bg-secondary border border-border">
                    {section.projects.length}
                  </span>
                </div>
              </BlurFade>

              <div
                className={cn(
                  "grid gap-5 sm:gap-6 auto-rows-fr",
                  section.gridCols || "grid-cols-1 md:grid-cols-2"
                )}
              >
                {section.projects.map((project, id) => (
                  <BlurFade
                    key={`${project.slug}-${id}`}
                    delay={BLUR_FADE_DELAY * 2.5 + id * 0.02}
                    className="h-full flex"
                  >
                    <ProjectCard
                      slug={project.slug}
                      title={project.title}
                      video={project.video}
                      image={project.image}
                      from="/projects"
                      aspectRatio={section.aspectRatio || "video"}
                      className="w-full"
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}
