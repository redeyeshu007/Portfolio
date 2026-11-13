import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function LayoutWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
