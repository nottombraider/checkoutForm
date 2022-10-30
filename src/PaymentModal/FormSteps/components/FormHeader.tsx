import React from "react";
import { FiChevronLeft } from "react-icons/all";

import { FormHeaderProps } from "./types";

export const FormHeader = ({
  goBackStep,
  title,
}: FormHeaderProps): JSX.Element => (
  <div className="flex justify-center mb-2">
    <FiChevronLeft
      role="button"
      type="button"
      className="h-5 text-green-500"
      onClick={() => goBackStep()}
    />
    <div className="m-auto text-xs">{title}</div>
  </div>
);
