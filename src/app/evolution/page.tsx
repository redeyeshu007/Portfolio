import LayoutWrapper from "@/components/layout-wrapper";
import type { Metadata } from "next";
import EvolutionSection from "./evolution-section";

export const metadata: Metadata = {
  title: "Evolution",
  description:
    "Not a résumé — an evolution. Explore Sudharsan's journey through software engineering, year by year.",
  openGraph: {
    title: "Evolution",
    description:
      "Not a résumé — an evolution. Explore Sudharsan's journey through software engineering, year by year.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolution",
    description:
      "Not a résumé — an evolution. Explore Sudharsan's journey through software engineering, year by year.",
  },
};

export default function EvolutionPage() {
  return (
    <LayoutWrapper>
      <section id="evolution">
        <EvolutionSection />
      </section>
    </LayoutWrapper>
  );
}
