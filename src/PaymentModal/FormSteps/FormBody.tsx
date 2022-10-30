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
      className="px-6 py-4 bg-white w-full md:w-[17rem] rounded shadow-md flex flex-col"
    >
      <FormHeader title={steps[stepNumber].title} goBackStep={goBackStep} />
      {steps[stepNumber].render(goNextStep)}
    </div>
  );
};
