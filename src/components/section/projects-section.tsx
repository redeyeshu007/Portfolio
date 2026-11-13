import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const FEATURED_PROJECT_SLUGS = [
    "ascendo-ai",
    "mevo-ai",
    "finlog-monitor",
    "annam-daan",
] as const;

export default function ProjectsSection() {
    const featuredProjects = FEATURED_PROJECT_SLUGS
        .map((slug) => DATA.projects.find((p) => p.slug === slug))
        .filter((p): p is (typeof DATA.projects)[number] => Boolean(p));

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            I&apos;ve worked on a variety of projects, from simple
                            websites to complex web applications. Here are a few of my
                            favorites.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full mx-auto auto-rows-fr">
                    {featuredProjects.map((project, id) => (
                        <BlurFade
                            key={`${project.slug}-${id}`}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full flex"
                        >
                            <ProjectCard
                                slug={project.slug}
                                title={project.title}
                                video={project.video}
                                image={project.image}
                                from="/#projects"
                                className="w-full"
                            />
                        </BlurFade>
                    ))}
                </div>
                <div className="flex justify-center pt-2">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 text-sm font-medium border border-border bg-card hover:bg-accent/50 px-4 py-2 rounded-xl transition-colors group"
                    >
                        <span>View all {DATA.projects.length} projects</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

