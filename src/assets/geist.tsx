import * as React from "react";
import { SVGProps } from "react";
export const Geist = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={288}
    height={344}
    fill="none"
    {...props}
  >
    <path
      fill="#D9D9D9"
      fillOpacity={0.1}
      fillRule="evenodd"
      d="M144 0C64.471 0 0 64.471 0 144v184c0 8.837 21.49 16 48 16s48-7.163 48-16c0 8.837 21.491 16 48.001 16 26.42 0 47.855-7.115 47.999-15.911.144 8.796 21.579 15.911 47.999 15.911 26.51 0 48-7.163 48-16H288V144C288 64.471 223.529 0 144 0Z"
      clipRule="evenodd"
    />
  </svg>
);
