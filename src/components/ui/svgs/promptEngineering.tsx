import type { SVGProps } from "react";

const PromptEngineering = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M7 8L11 12L7 16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 7L17.8 9.2L20 10L17.8 10.8L17 13L16.2 10.8L14 10L16.2 9.2L17 7Z" fill="#F59E0B" />
  </svg>
);

export { PromptEngineering };

