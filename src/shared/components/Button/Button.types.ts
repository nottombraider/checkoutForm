import { PropsWithChildren } from "react";

export type ButtonVariant = "primary" | "text";

export type ButtonProps = PropsWithChildren<JSX.IntrinsicElements["button"]> & {
  variant?: ButtonVariant;
};
