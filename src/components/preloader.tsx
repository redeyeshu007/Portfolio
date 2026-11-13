"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DEFAULT_WORDS = ["Code.", "Create.", "Innovate."];

// Route-specific preloader text. Longest matching prefix wins.
const ROUTE_WORDS: { prefix: string; words: string[] }[] = [
  { prefix: "/evolution", words: ["Evolution."] },
  { prefix: "/projects", words: ["Projects."] },
  { prefix: "/comeback", words: ["The", "Comeback."] },
  { prefix: "/blog", words: ["Blog."] },
  { prefix: "/experience", words: ["Experience."] },
];

function getWords(pathname: string): string[] {
  const match = ROUTE_WORDS.find((route) => pathname.startsWith(route.prefix));
  return match ? match.words : DEFAULT_WORDS;
}

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  const words = getWords(pathname);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";

    const duration = reduceMotion
      ? 800
      : Math.min(1900, 800 + words.length * 350);

    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [pathname, reduceMotion, words.length]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {loading && (
        <motion.div
          key={`preloader-${pathname}`}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 px-6 text-center">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="text-4xl font-semibold tracking-tighter text-foreground sm:text-6xl"
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { y: 14, opacity: 0, filter: "blur(8px)" }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { y: 0, opacity: 1, filter: "blur(0px)" }
                }
                transition={{
                  duration: 0.5,
                  delay:
                    (reduceMotion ? 0.05 : 0.2) +
                    i * (reduceMotion ? 0.1 : 0.35),
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
