import { useBoolean } from "react-hanger/array";
import classnames from "classnames";

import { FadeOutProps } from "./FadeOut.types";

export const FadeOut = ({ children, action }: FadeOutProps): JSX.Element => {
  const [fadeOut, { toggle }] = useBoolean(false);

  const handleToggle = (callback: VoidFunction) => {
    toggle();

    setTimeout(callback, 300);
  };

  return (
    <>
      <div
        className={classnames(
          "flex flex-col gap-2 animate__animated animate__slideInRight",
          {
            "animate__animated animate__slideOutLeft": fadeOut,
          }
        )}
      >
        {typeof children === "function"
          ? children(fadeOut, handleToggle)
          : children}
      </div>
      {typeof action === "function" ? action(fadeOut, handleToggle) : action}
    </>
  );
};
