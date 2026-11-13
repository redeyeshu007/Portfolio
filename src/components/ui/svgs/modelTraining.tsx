import type { SVGProps } from "react";

const ModelTraining = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M7 15C9.5 13 11 14 13 8.5C14.2 5.5 15.5 7.5 17 6.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="17" cy="6.5" r="1.5" fill="#F59E0B" />
    <path d="M7 8V16H17" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
  </svg>
);

export { ModelTraining };

