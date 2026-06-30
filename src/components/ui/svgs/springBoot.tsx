import type { SVGProps } from "react";

const SpringBoot = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="128" fill="#6DB33F" />
    <path
      d="M216 56a97 97 0 01-12 18C183 98 160 107 136 107c-12 0-27-2-46-8-16-5-27-8-36-8-21 0-38 10-51 30l-3-2c10-23 28-38 52-44 12-3 26-4 41-2l22 5c14 3 26 5 36 5 30 0 54-11 70-32zM53 196a15 15 0 100-30 15 15 0 000 30z"
      fill="#fff"
    />
  </svg>
);

export { SpringBoot };
