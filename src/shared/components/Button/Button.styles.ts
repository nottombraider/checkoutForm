import classnames from "classnames";
import { ButtonVariant } from "./Button.types";

export const buttonStyles = (variant: ButtonVariant, className?: string) =>
  classnames(
    "rounded-full focus:outline-none ",
    { "bg-green-400 text-white py-1": variant === "primary" },
    {
      "text-xs uppercase text-indigo-700 mx-auto py-2 px-4": variant === "text",
    },
    className
  );
