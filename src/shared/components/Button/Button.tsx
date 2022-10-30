import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button className={buttonStyles(variant, className)} {...props}>
    {children}
  </button>
);
