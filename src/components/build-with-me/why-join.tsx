"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import { Briefcase, TrendingUp, Github, Lightbulb } from "lucide-react";

const icons = [Briefcase, TrendingUp, Github, Lightbulb];

export function WhyJoin({ delay = 0.04 }: { delay?: number }) {
  const { whyJoin } = BUILD_WITH_ME_DATA;

  return (
    <section className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Why Join?</h2>
          <p className="text-muted-foreground text-sm">
            What you get out of collaborating on these projects.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {whyJoin.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <BlurFade key={idx} delay={delay + idx * 0.1}>
              <div className="flex flex-col border border-border rounded-xl p-6 bg-background h-full hover:ring-2 hover:ring-muted transition-all duration-200">
                <div className="mb-4 inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
