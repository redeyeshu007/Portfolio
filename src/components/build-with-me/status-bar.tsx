"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import { useSpring, useTransform, motion } from "motion/react";
import { useEffect } from "react";
import { Briefcase, Users, Target, Rocket } from "lucide-react";

function AnimatedCounter({ value }: { value: number }) {
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export function StatusBar({ delay = 0.04 }: { delay?: number }) {
  const { stats } = BUILD_WITH_ME_DATA;

  return (
    <BlurFade delay={delay}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-background border border-border rounded-xl p-4 shadow-sm">
        
        <div className="flex flex-col gap-1 p-3 rounded-lg bg-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Briefcase className="size-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Current Projects</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            <AnimatedCounter value={stats.currentProjects} />
          </div>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-lg bg-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Users className="size-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Open Roles</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            <AnimatedCounter value={stats.openRoles} />
          </div>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-lg bg-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Rocket className="size-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Active Project</span>
          </div>
          <div className="text-lg font-bold text-foreground truncate mt-1">
            {stats.activeProject}
          </div>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-lg bg-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Target className="size-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Next Goal</span>
          </div>
          <div className="text-lg font-bold text-foreground truncate mt-1">
            {stats.nextGoal}
          </div>
        </div>

      </div>
    </BlurFade>
  );
}
