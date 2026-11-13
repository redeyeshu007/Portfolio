import type { SVGProps } from "react";

const Kafka = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="38" r="30" fill="currentColor" />
    <circle cx="38" cy="198" r="30" fill="currentColor" />
    <circle cx="218" cy="198" r="30" fill="currentColor" />
    <circle cx="128" cy="128" r="22" fill="currentColor" />
    <path
      d="M128 67v39M115 117l-55 65M141 117l55 65"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
  </svg>
);

export { Kafka };
