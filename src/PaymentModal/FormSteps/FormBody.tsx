import React from "react";

import { useStepper } from "../../shared";
import { steps } from "./consts";
import { FormHeader } from "./components";

export const FormBody = (): JSX.Element => {
  const {
    stepNumber,
    stepActions: { increase: goNextStep, decrease: goBackStep },
  } = useStepper();

  return (
    <div
      key={stepNumber}
      className="flex flex-col gap-2 px-6 py-4 bg-white w-[17rem] rounded shadow-md min-h-[90%]"
    >
      <FormHeader title={steps[stepNumber].title} goBackStep={goBackStep} />
      {steps[stepNumber].render(goNextStep)}
    </div>
  );
};
