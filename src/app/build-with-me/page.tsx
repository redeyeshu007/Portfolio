import LayoutWrapper from "@/components/layout-wrapper";
import { HeroSection } from "@/components/build-with-me/hero-section";
import { OpenProjects } from "@/components/build-with-me/open-projects";
import { FAQSection } from "@/components/build-with-me/faq-section";
import { FinalSection } from "@/components/build-with-me/final-section";

const DELAY = 0.04;

export default function BuildWithMePage() {
  return (
    <LayoutWrapper>
      <main className="min-h-dvh flex flex-col gap-14 relative pb-24">
        <HeroSection delay={DELAY} />
        
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          <OpenProjects delay={DELAY * 7} />
          
          <FAQSection delay={DELAY * 9} />
          
          <div className="border-t border-border/50">
            <FinalSection delay={DELAY * 11} />
          </div>
        </div>
      </main>
    </LayoutWrapper>
  );
}
