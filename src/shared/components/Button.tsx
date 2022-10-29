import { PropsWithChildren } from "react";

export const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["button"]>) => (
  <button
    className={`rounded-full bg-green-400 text-white py-1 ${className}`}
    {...props}
  >
    {children}
  </button>
);
