"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import { Search, FileText, MessageSquare, Github, Code, Users, Rocket } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "search": Search,
  "file-text": FileText,
  "message-square": MessageSquare,
  "github": Github,
  "code": Code,
  "users": Users,
  "rocket": Rocket,
};

export function HowWeCollaborate({ delay = 0.04 }: { delay?: number }) {
  const { collaborationSteps } = BUILD_WITH_ME_DATA;

  return (
    <section className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">How We Collaborate</h2>
          <p className="text-muted-foreground text-sm">
            Our streamlined process from application to launch.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={delay * 2}>
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0 mt-4 px-4">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-px bg-border -translate-y-1/2 z-0" />
          
          {/* Connecting line (mobile) */}
          <div className="block md:hidden absolute left-8 top-[5%] bottom-[5%] w-px bg-border -translate-x-1/2 z-0" />

          {collaborationSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Code;
            return (
              <div key={idx} className="relative z-10 flex md:flex-col items-center gap-4 md:gap-3 w-full md:w-auto">
                <div className="flex items-center justify-center size-10 md:size-12 rounded-full border border-border bg-background shadow-sm group hover:ring-2 hover:ring-primary/20 transition-all">
                  <Icon className="size-4 md:size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </BlurFade>
    </section>
  );
}
