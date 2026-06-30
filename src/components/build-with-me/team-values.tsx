"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import { CheckCircle2 } from "lucide-react";

export function TeamValues({ delay = 0.04 }: { delay?: number }) {
  const { teamValues } = BUILD_WITH_ME_DATA;

  return (
    <section className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Team Values</h2>
          <p className="text-muted-foreground text-sm">
            The principles that guide our collaboration.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teamValues.map((value, idx) => (
          <BlurFade key={idx} delay={delay + idx * 0.1}>
            <div className="flex items-start gap-3 p-4 border border-border rounded-xl bg-background hover:bg-muted/20 transition-colors h-full">
              <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{value}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
