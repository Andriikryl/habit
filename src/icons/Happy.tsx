import { IconProps } from "./IconProps.types";

const Happy = ({ className, size = 34 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 14 14"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13Z" />
        <path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4M4.8 5.45a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.4.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5" />
      </g>
    </svg>
  );
};

export { Happy };
