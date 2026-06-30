"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Github, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export function OpenProjects({ delay = 0.04 }: { delay?: number }) {
  const { openProjects } = BUILD_WITH_ME_DATA;

  return (
    <section id="open-projects" className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Open Projects</h2>
          <p className="text-muted-foreground text-sm">
            Current initiatives looking for passionate contributors.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {openProjects.map((project, idx) => (
          <BlurFade key={project.name} delay={delay + idx * 0.1}>
            <div className="flex flex-col border border-border rounded-xl bg-background overflow-hidden h-full">
              {/* Card Header */}
              <div className="p-6 pb-4 border-b border-border/50 bg-muted/20">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {project.stage}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Progress Bar */}
                <div className="flex flex-col gap-1.5 mb-4">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Progress</span>
                    <span className="text-muted-foreground">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px] h-5 px-1.5 border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 gap-4">


                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Looking For</span>
                  <div className="flex flex-wrap gap-2">
                    {project.lookingFor.map((role) => (
                      <Badge key={role} className="bg-muted text-foreground hover:bg-muted/80">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Expanded Details via Accordion */}
                <div className="mt-2">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details" className="border-border">
                      <AccordionTrigger className="text-sm py-3 hover:no-underline hover:text-primary">
                        Project Contribution Details
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground flex flex-col gap-4 pt-2">
                        <div>
                          <strong className="text-foreground block mb-1">Vision</strong>
                          {project.vision}
                        </div>
                        <div>
                          <strong className="text-foreground block mb-1">Architecture</strong>
                          {project.architecture}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <strong className="text-foreground block mb-1">Current Features</strong>
                            <ul className="list-disc list-inside space-y-1">
                              {project.currentFeatures.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-foreground block mb-1">Upcoming Features</strong>
                            <ul className="list-disc list-inside space-y-1">
                              {project.upcomingFeatures.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">

                  <Button asChild className="flex-1 gap-2">
                    <Link href="#contact">
                      <Rocket className="size-4" />
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
