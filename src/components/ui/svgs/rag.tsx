import type { SVGProps } from "react";

const RAG = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#10B981" strokeWidth="2" />
    <path d="M4 5V11C4 12.66 7.58 14 12 14C16.42 14 20 12.66 20 11V5" stroke="#10B981" strokeWidth="2" />
    <circle cx="15.5" cy="15.5" r="4.5" fill="none" stroke="#6366F1" strokeWidth="2" />
    <path d="M18.5 18.5L22 22" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export { RAG };

