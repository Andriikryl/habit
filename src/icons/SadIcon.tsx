import { IconProps } from "./IconProps.types";

const SadIcon = ({ className, size = 34 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        d="m4.1 9.7l-.3.4l.8.6l.3-.4zm6 .6l.3.4l.8-.6l-.3-.4zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM4 6h1V5H4zm6 0h1V5h-1zm.9 3.7c-1.7-2.267-5.1-2.267-6.8 0l.8.6a3.25 3.25 0 0 1 5.2 0z"
      />
    </svg>
  );
};

export { SadIcon };