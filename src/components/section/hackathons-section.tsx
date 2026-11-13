/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HackathonsSection() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleIndex = (index: number) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time in university, I attended {DATA.hackathons.length}+
              hackathons. People from around the country would come together and
              build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
            </p>
          </div>
        </div>

        <Timeline>
          {DATA.hackathons.map((hackathon, idx) => {
            const isExpanded = expandedIndices.has(idx);

            return (
              <TimelineItem
                key={hackathon.title + hackathon.dates + idx}
                className="w-full flex items-start justify-between gap-4 sm:gap-8"
              >
                <TimelineConnectItem className="flex items-start justify-center pt-0.5">
                  {hackathon.image ? (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="size-9 sm:size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    />
                  ) : (
                    <div className="size-9 sm:size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                  )}
                </TimelineConnectItem>

                <div
                  onClick={() => toggleIndex(idx)}
                  className="flex flex-1 flex-col justify-start gap-1.5 min-w-0 cursor-pointer group rounded-xl p-2.5 sm:p-3 -m-2 sm:-m-2.5 transition-colors hover:bg-secondary/40 select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleIndex(idx);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center justify-between gap-2">
                    <time className="text-xs font-mono text-muted-foreground">
                      {hackathon.dates}
                    </time>
                    {hackathon.win && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-muted text-foreground border border-border">
                        {hackathon.win}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm sm:text-base leading-snug text-foreground transition-colors flex items-center gap-1.5">
                      <span>{hackathon.title}</span>
                    </h3>
                    <ChevronDown
                      className={cn(
                        "size-4 text-muted-foreground transition-transform duration-200 shrink-0",
                        isExpanded ? "rotate-180 text-foreground" : "group-hover:text-foreground"
                      )}
                      aria-hidden
                    />
                  </div>

                  {hackathon.location && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                      {hackathon.location}
                    </p>
                  )}

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 pb-0.5 wrap-break-word">
                          {hackathon.description}
                        </p>

                        {hackathon.links && hackathon.links.length > 0 && (
                          <div
                            className="mt-2.5 flex flex-row flex-wrap items-start gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {hackathon.links.map(
                              (
                                link: {
                                  href: string;
                                  title: string;
                                  icon?: React.ReactNode;
                                },
                                lIdx: number
                              ) => (
                                <Link
                                  href={link.href}
                                  key={lIdx}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground hover:bg-primary/90">
                                    {link.icon}
                                    {link.title}
                                  </Badge>
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
