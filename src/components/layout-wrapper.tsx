import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6 w-full">
      {children}
    </div>
  );
}
