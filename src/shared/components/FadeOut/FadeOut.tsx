import { useBoolean } from "react-hanger/array";
import classnames from "classnames";

import { FadeOutProps } from "./FadeOut.types";

export const FadeOut = ({ children, action }: FadeOutProps): JSX.Element => {
  const [fadeOut, { toggle }] = useBoolean(false);

  const handleToggle = (callback: VoidFunction) => {
    toggle();

    setTimeout(callback, 700);
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
        {typeof children === "function" ? children(handleToggle) : children}
      </div>
      {typeof action === "function" ? action(handleToggle) : action}
    </>
  );
};
