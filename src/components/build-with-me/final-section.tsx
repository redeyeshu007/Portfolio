"use client";

import BlurFade from "@/components/magicui/blur-fade";
export function FinalSection({ delay = 0.04 }: { delay?: number }) {
  return (
    <section id="contact" className="flex flex-col items-center text-center space-y-8 py-20">
      <BlurFade delay={delay}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
          The best products are built by people who believe in the same vision.
        </h2>
      </BlurFade>
      
      <BlurFade delay={delay * 1.5}>
        <p className="text-lg text-muted-foreground flex flex-col gap-2">
          <span>If one of these ideas excites you, let's build it together.</span>
          <span>Send your CV to <a href="mailto:sudharsanelangovan2005@gmail.com" className="text-primary hover:underline font-medium">sudharsanelangovan2005@gmail.com</a></span>
        </p>
      </BlurFade>

    </section>
  );
}
