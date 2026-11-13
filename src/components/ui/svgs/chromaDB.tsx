import type { SVGProps } from "react";

const ChromaDB = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>ChromaDB</title>
    <circle cx="6" cy="12" r="4.5" fill="#FF5C35" />
    <circle cx="12" cy="12" r="4.5" fill="#FFAF38" />
    <circle cx="18" cy="12" r="4.5" fill="#00E599" />
  </svg>
);

export { ChromaDB };

