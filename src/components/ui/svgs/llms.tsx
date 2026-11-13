import type { SVGProps } from "react";

const LLMs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z"
      fill="url(#llm-grad)"
    />
    <path
      d="M19 16L20.1 19.1L23.2 20.2L20.1 21.3L19 24.4L17.9 21.3L14.8 20.2L17.9 19.1L19 16Z"
      fill="url(#llm-grad-2)"
    />
    <defs>
      <linearGradient id="llm-grad" x1="3.5" y1="2" x2="20.5" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="llm-grad-2" x1="14.8" y1="16" x2="23.2" y2="24.4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
);

export { LLMs };

