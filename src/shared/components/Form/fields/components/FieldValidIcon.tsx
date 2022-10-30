import React from "react";
import classnames from "classnames";
import { BsCheck2 } from "react-icons/all";

import { endIconIdentifier } from "../styles";

export const FieldValidIcon = (): JSX.Element => (
  <span className="text-green-500">
    <BsCheck2 className={classnames("w-3.5", endIconIdentifier)} />
  </span>
);
