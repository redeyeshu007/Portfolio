import type { SVGProps } from "react";

const ModelEvaluation = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="5" stroke="#10B981" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.5" fill="#10B981" />
    <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export { ModelEvaluation };

