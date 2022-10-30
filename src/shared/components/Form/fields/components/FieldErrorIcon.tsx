import React from "react";
import { IoClose } from "react-icons/all";

import { endIconIdentifier } from "../styles";
import classnames from "classnames";

export const FieldErrorIcon = (): JSX.Element => (
  <span className="text-red-500">
    <IoClose className={classnames("w-3", endIconIdentifier)} />
  </span>
);
