import type { SVGProps } from "react";

const MultiAgent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="4" r="3" fill="#6366F1" />
    <circle cx="4" cy="18" r="3" fill="#EC4899" />
    <circle cx="20" cy="18" r="3" fill="#3B82F6" />
    <path d="M12 7V13M12 13L6 16M12 13L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="13" r="1.5" fill="currentColor" />
  </svg>
);

export { MultiAgent };

