import type { SVGProps } from "react";

const DataPreprocessing = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 4H21L14 13V19L10 21V13L3 4Z"
      stroke="#06B6D4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="17" cy="18" r="1" fill="#06B6D4" />
    <circle cx="19" cy="15" r="1.5" fill="#06B6D4" />
    <circle cx="21" cy="18" r="1" fill="#06B6D4" />
  </svg>
);

export { DataPreprocessing };

