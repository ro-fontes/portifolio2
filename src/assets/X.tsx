import * as React from "react";
import { SVGProps } from "react";

export const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    className="fill-BASIC_ONYX dark:fill-BASIC_WHITE"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
