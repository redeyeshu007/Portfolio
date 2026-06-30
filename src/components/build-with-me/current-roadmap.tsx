"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";

export function CurrentRoadmap({ delay = 0.04 }: { delay?: number }) {
  const { roadmap } = BUILD_WITH_ME_DATA;

  // Simple helper to generate ASCII-style progress bars if requested, 
  // but we'll use actual divs to match the aesthetic requested while 
  // maintaining a clean UI.
  const getProgressVisual = (progress: number) => {
    return (
      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden max-w-[200px]">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Current Roadmap</h2>
          <p className="text-muted-foreground text-sm">
            Timeline and progress of our major initiatives.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={delay * 2}>
        <div className="flex flex-col border border-border rounded-xl p-6 bg-background">
          <div className="flex flex-col gap-4">
            {roadmap.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 py-2 border-b border-border/50 last:border-0 last:pb-0">
                <span className="font-mono text-xs font-semibold px-2 py-1 bg-muted rounded">
                  {item.quarter}
                </span>
                <span className="font-medium text-sm flex-1 truncate w-24">
                  {item.name}
                </span>
                
                {/* Visual Progress Bar */}
                {getProgressVisual(item.progress)}
                
                {/* Fallback text progress (optional) */}
                <span className="text-xs text-muted-foreground tabular-nums w-8 text-right hidden sm:block">
                  {item.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
