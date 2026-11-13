import type { SVGProps } from "react";

const DataPipelines = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 6H9C11 6 13 8 13 10V14C13 16 15 18 17 18H21"
      stroke="#F59E0B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="3" cy="6" r="2" fill="#F59E0B" />
    <circle cx="21" cy="18" r="2" fill="#F59E0B" />
    <path
      d="M3 18H7C9 18 10 17 10.5 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M13.5 8C14 7 15 6 17 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

export { DataPipelines };

