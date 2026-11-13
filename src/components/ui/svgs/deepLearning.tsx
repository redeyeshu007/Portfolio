import type { SVGProps } from "react";

const DeepLearning = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="7" x2="12" y2="5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="5" y1="7" x2="12" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="5" y1="17" x2="12" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="5" y1="17" x2="12" y2="19" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="12" y1="5" x2="19" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="12" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="12" y1="19" x2="19" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
    <circle cx="5" cy="7" r="2.5" fill="#3B82F6" />
    <circle cx="5" cy="17" r="2.5" fill="#3B82F6" />
    <circle cx="12" cy="5" r="2.5" fill="#8B5CF6" />
    <circle cx="12" cy="12" r="2.5" fill="#8B5CF6" />
    <circle cx="12" cy="19" r="2.5" fill="#8B5CF6" />
    <circle cx="19" cy="12" r="2.5" fill="#EC4899" />
  </svg>
);

export { DeepLearning };

