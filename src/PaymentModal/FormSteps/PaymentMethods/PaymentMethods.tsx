import React from "react";
import classnames from "classnames";
import { useBoolean } from "react-hanger/array";

import { Button, FadeOut } from "../../../shared";
import { cardStyles } from "./PaymentMethods.styles";
import { paymentMethodsList } from "./PaymentMethods.consts";

export const PaymentMethods = (): JSX.Element => {
  const [isAllVisible, { toggle }] = useBoolean(false);

  return (
    <FadeOut action={() => null}>
      <ul
        className={classnames("max-h-[13.5rem] overflow-hidden", {
          "max-h-[37rem] transition-all duration-[1500ms] ease-in-out":
            isAllVisible,
        })}
      >
        {paymentMethodsList.map(({ paymentIcon, title, ownStyles }) => (
          <li key={`${title}`} className={classnames(cardStyles, ownStyles)}>
            {paymentIcon}
            {title}
          </li>
        ))}
      </ul>

      {!isAllVisible && (
        <Button onClick={toggle} variant="text" className="w-full mt-2">
          Show more
        </Button>
      )}
    </FadeOut>
  );
};
