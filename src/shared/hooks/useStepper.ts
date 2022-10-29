import { useNumber } from "react-hanger/array";
import { steps } from "../consts";

export const useStepper = () => {
  const upperLimit = steps.length;
  const [stepNumber, stepActions] = useNumber(0, {
    upperLimit,
    loop: false,
    lowerLimit: 0,
  });
  const isLastStep = stepNumber === upperLimit - 1;

  return {
    isLastStep,
    stepNumber,
    stepActions,
  };
};
