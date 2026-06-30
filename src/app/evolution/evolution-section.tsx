"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Trophy, Lightbulb, FolderOpen, Cpu } from "lucide-react";

/* ── DATA ──────────────────────────────────────────────────────────────── */

const evolutionData = [
  {
    id: "2023",
    year: "2023",
    label: "2023",
    title: "The Beginning",
    description:
      "Started Computer Science Engineering with a blank HTML file and an overwhelming curiosity. Learned the fundamentals—HTML, CSS, JavaScript—and built my first web pages. Every small project felt like a breakthrough.",
    skills: ["HTML", "CSS", "JavaScript", "C", "Python"],
    projects: [
      "Personal Portfolio v1",
      "Calculator App",
      "Static Web Pages",
    ],
    achievement: "Built and shipped my first web project entirely from scratch.",
    lesson: "Start before you're ready.",
  },
  {
    id: "2024",
    year: "2024",
    label: "2024",
    title: "Learning Through Failure",
    description:
      "Projects broke in demos. Ideas died midway. I entered my first competitions and didn't place. But every failure taught me something success never could — the discipline to show up again.",
    skills: ["React Basics", "Git", "Data Structures", "Problem Solving"],
    projects: [
      "CLI Productivity Tools",
      "Hackathon Entry Project",
      "JavaScript Mini Games",
    ],
    achievement: "Completed 100+ LeetCode problems and entered my first hackathon.",
    lesson: "Failure is the most honest feedback loop.",
  },
  {
    id: "2025",
    year: "2025",
    label: "2025",
    title: "Building Momentum",
    description:
      "Started building real-world applications instead of following tutorials. Participated in hackathons with intent. Started freelancing. The skills I had been accumulating started to compound.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Docker", "REST APIs"],
    projects: [
      "Real Estate Management System",
      "ROI Calculator App",
      "Freelance Web Applications",
    ],
    achievement: "First hackathon experience and first paying freelance client.",
    lesson: "Consistency beats motivation every time.",
  },
  {
    id: "2026",
    year: "2026",
    label: "2026",
    title: "The Comeback",
    description:
      "AI stopped being a buzzword and became a lens. Built AI-powered products, won hackathons, worked with real clients, and joined Javix Technologies as a Full Stack Developer Intern. The gap between idea and execution shrank every week.",
    skills: [
      "TensorFlow",
      "OpenCV",
      "Spring Boot",
      "Flutter",
      "Kafka",
      "Generative AI",
      "AI Agents",
      "Firebase",
    ],
    projects: [
      "AI-Powered Web Platform",
      "Computer Vision System",
      "Full-Stack Mobile Application",
    ],
    achievement:
      "Won hackathons, delivered AI products, and joined Javix Technologies.",
    lesson: "Ownership changes everything about how you build.",
  },
  {
    id: "future",
    year: "Future",
    label: "Future",
    title: "The Unwritten Chapter",
    description:
      "The ambition doesn't compress into a year. Building larger AI systems, contributing to meaningful products, and laying the groundwork for a technology-driven business. The best code I'll ever write hasn't been written yet.",
    skills: [
      "Advanced AI Systems",
      "Distributed Architecture",
      "Product Engineering",
      "Innovation Design",
    ],
    projects: [
      "Large-Scale AI Platform",
      "Open Source Contributions",
      "Technology Business",
    ],
    achievement: "The next milestone is being earned right now.",
    lesson: "Build with purpose. Technology is the means, not the end.",
  },
];

/* ── TIMELINE STEP ─────────────────────────────────────────────────────── */

function TimelineStep({
  item,
  isActive,
  isCompleted,
  onClick,
  isFirst,
  isLast,
}: {
  item: (typeof evolutionData)[number];
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center gap-2 flex-1 min-w-0">
      {/* Connector line — left half */}
      {!isFirst && (
        <div
          className="absolute top-3.5 right-1/2 left-0 h-px transition-colors duration-300"
          style={{
            background: isCompleted || isActive
              ? "var(--foreground)"
              : "var(--border)",
            opacity: isCompleted || isActive ? 0.25 : 1,
          }}
        />
      )}
      {/* Connector line — right half */}
      {!isLast && (
        <div className="absolute top-3.5 left-1/2 right-0 h-px bg-border" />
      )}

      {/* Dot */}
      <button
        onClick={onClick}
        aria-label={`Select year ${item.label}`}
        className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
        style={{
          background: isActive
            ? "var(--primary)"
            : isCompleted
              ? "var(--muted)"
              : "var(--background)",
          borderColor: isActive
            ? "var(--primary)"
            : "var(--border)",
          boxShadow: isActive
            ? "0 0 0 4px color-mix(in oklch, var(--primary) 15%, transparent)"
            : "none",
        }}
      >
        {isCompleted && !isActive && (
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        )}
        {isActive && (
          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
        )}
      </button>

      {/* Year label */}
      <button
        onClick={onClick}
        className="text-center focus-visible:outline-none cursor-pointer"
        tabIndex={-1}
        aria-hidden
      >
        <span
          className="text-xs transition-colors duration-200 whitespace-nowrap"
          style={{
            color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
            fontWeight: isActive ? 600 : 400,
          }}
        >
          {item.label}
        </span>
      </button>
    </div>
  );
}

/* ── CONTENT CARD ──────────────────────────────────────────────────────── */

function EvolutionCard({ data }: { data: (typeof evolutionData)[number] }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="p-6 flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground tabular-nums">
            {data.year}
          </span>
          <h3 className="text-xl font-semibold tracking-tight leading-tight">
            {data.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {data.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Skills */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Skills Added
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {data.skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.04 + i * 0.04,
                  ease: "easeOut",
                }}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-7 w-fit px-3 flex items-center">
                  <span className="text-foreground text-xs font-medium">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5">
            <FolderOpen className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Projects
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {data.projects.map((project, i) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.04 + i * 0.04,
                  ease: "easeOut",
                }}
              >
                <Badge
                  variant="outline"
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                >
                  {project}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Achievement + Lesson */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Achievement
              </span>
            </div>
            <p className="text-sm text-foreground/80 leading-snug">
              {data.achievement}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <Lightbulb className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Lesson
              </span>
            </div>
            <p className="text-sm text-foreground/80 italic leading-snug">
              &ldquo;{data.lesson}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN SECTION ──────────────────────────────────────────────────────── */

export default function EvolutionSection() {
  const [activeId, setActiveId] = useState("2023");
  const activeIndex = evolutionData.findIndex((d) => d.id === activeId);
  const activeData = evolutionData[activeIndex];

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      {/* ─ Section heading — matches Projects / Hackathons exactly ─ */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">
              Evolution
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            The journey, year by year
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Not a résumé. An evolution. Select a year to explore what I built,
            learned, and became.
          </p>
        </div>
      </div>

      {/* ─ Horizontal timeline ─ */}
      <div className="flex items-start w-full px-2 sm:px-6">
        {evolutionData.map((item, i) => (
          <TimelineStep
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            isCompleted={i < activeIndex}
            onClick={() => setActiveId(item.id)}
            isFirst={i === 0}
            isLast={i === evolutionData.length - 1}
          />
        ))}
      </div>

      {/* ─ Content card — animated on year change ─ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <EvolutionCard data={activeData} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
