import type { SVGProps } from "react";

const OpenCV = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="72" r="56" fill="#5C3EE8" />
    <circle cx="48" cy="200" r="48" fill="#E44D26" />
    <circle cx="208" cy="200" r="48" fill="#00A8E0" />
    <circle cx="128" cy="72" r="20" fill="#fff" />
    <circle cx="48" cy="200" r="18" fill="#fff" />
    <circle cx="208" cy="200" r="18" fill="#fff" />
  </svg>
);

export { OpenCV };
