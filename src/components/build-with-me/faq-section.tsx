"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection({ delay = 0.04 }: { delay?: number }) {
  const { faq } = BUILD_WITH_ME_DATA;

  return (
    <section className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2 text-center items-center">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
      </BlurFade>

      <BlurFade delay={delay * 2}>
        <div className="max-w-3xl mx-auto w-full">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-4 bg-background overflow-hidden data-[state=open]:ring-2 data-[state=open]:ring-muted transition-all">
                <AccordionTrigger className="text-left font-medium text-[15px] hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </BlurFade>
    </section>
  );
}
