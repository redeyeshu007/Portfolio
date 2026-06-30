import type { SVGProps } from "react";

const AIAgents = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="120" fill="#6366F1" />
    <circle cx="128" cy="100" r="36" fill="#fff" />
    <path d="M60 196c0-37 30-68 68-68s68 31 68 68" fill="#fff" />
    <circle cx="80" cy="110" r="8" fill="#6366F1" />
    <circle cx="176" cy="110" r="8" fill="#6366F1" />
    <path d="M80 60 l48-24 l48 24" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="128" cy="36" r="8" fill="#fff" />
  </svg>
);

export { AIAgents };
