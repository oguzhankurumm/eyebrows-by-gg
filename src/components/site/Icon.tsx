import type { CSSProperties } from "react";
const paths = {
  close: <path d="m6 6 12 12M6 18 18 6" />,
  home: (
    <>
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />
    </>
  ),
  treatments: (
    <>
      <path d="M8 3v18M3 8h18M16 3v18M3 16h18" />
    </>
  ),
  results: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="m3 16 5-5 4 4 3-3 6 6" />
      <circle cx="15.5" cy="8" r="1.5" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="4" />
      <path d="M7 3v4m10-4v4M3 11h18m-14 5h3m4 0h3" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  diagonal: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  phone: (
    <>
      <path d="m8 3 3 5-3 3c1 3 2 4 5 5l3-3 5 3c-1 7-8 6-14 0S0 4 8 3Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  message: (
    <>
      <path d="M21 11a8 8 0 0 1-8 8H7l-5 3V11a9 9 0 0 1 19 0Z" />
      <path d="M7 9h9M7 13h6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 8h16M4 16h16" />
    </>
  ),
};
export type IconName = keyof typeof paths;
export function Icon({
  name,
  size = 20,
  style,
}: {
  name: IconName;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
