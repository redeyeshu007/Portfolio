"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection({ delay = 0.04 }: { delay?: number }) {
  return (
    <section className="flex flex-col items-center text-center space-y-6 pt-12 pb-8">
      <BlurFadeText
        delay={delay}
        className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
        yOffset={8}
        text="Build With Me"
      />
      
      <BlurFade delay={delay * 2}>
        <h2 className="text-xl md:text-2xl font-semibold text-primary/80">
          Great products are rarely built alone.
        </h2>
      </BlurFade>

      <BlurFade delay={delay * 3}>
        <p className="text-muted-foreground max-w-[600px] md:text-lg leading-relaxed mx-auto text-pretty">
          I'm building ambitious products in AI, Full-Stack Development, and Automation. Some projects are complete, some are prototypes, and some are waiting for the right people to bring them to life.
          <br /><br />
          If you're passionate about building meaningful software, I'd love to collaborate.
        </p>
      </BlurFade>

      <BlurFade delay={delay * 4} className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
          <Link href="#open-projects">
            <ArrowDown className="size-4" />
            View Open Projects
          </Link>
        </Button>
      </BlurFade>
    </section>
  );
}
