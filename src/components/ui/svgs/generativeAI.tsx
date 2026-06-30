import type { SVGProps } from "react";

const GenerativeAI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="genai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <circle cx="128" cy="128" r="120" fill="url(#genai-grad)" />
    <path
      d="M128 56l12 36h38l-31 22 12 36-31-22-31 22 12-36-31-22h38z"
      fill="#fff"
    />
    <circle cx="80" cy="176" r="16" fill="#fff" opacity="0.7" />
    <circle cx="176" cy="176" r="16" fill="#fff" opacity="0.7" />
    <circle cx="128" cy="188" r="10" fill="#fff" opacity="0.5" />
  </svg>
);

export { GenerativeAI };
