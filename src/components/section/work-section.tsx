/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

type WorkItem = {
  company: string;
  href?: string;
  badges?: readonly string[];
  location?: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description?: string;
};

export default function WorkSection() {
  const workList: readonly WorkItem[] = DATA.work;

  return (
    <div className="w-full grid gap-4 sm:gap-5">
      {workList.map((work) => {
        if (work.href) {
          return (
            <Link
              key={work.company}
              href={work.href}
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer transition-colors"
            >
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-sm sm:text-base leading-snug flex items-center gap-1.5 text-foreground truncate">
                    <span className="truncate">{work.company}</span>
                    <ChevronRight
                      className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
                      aria-hidden
                    />
                  </h3>
                  <span className="text-[11px] sm:text-xs tabular-nums text-muted-foreground shrink-0 text-right">
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {work.title}
                </p>
              </div>
            </Link>
          );
        }

        return (
          <Accordion
            key={work.company}
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem
              value={work.company}
              className="w-full border-b-0 grid gap-2"
            >
              <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                <div className="flex items-center gap-3 sm:gap-4 w-full text-left">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold text-sm sm:text-base leading-snug flex items-center gap-1.5 text-foreground truncate">
                        <span className="truncate">{work.company}</span>
                        <ChevronRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90 shrink-0" />
                      </div>
                      <span className="text-[11px] sm:text-xs tabular-nums text-muted-foreground shrink-0 text-right">
                        {work.start} - {work.end ?? "Present"}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {work.title}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0 pl-11 sm:pl-14 text-xs sm:text-sm text-muted-foreground pt-1">
                {work.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}

