import { useEffect } from "react";
import { useNumber } from "react-hanger/array";

export const useCountdown = (initialSeconds: number) => {
  const [seconds, { decrease }] = useNumber(initialSeconds);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      if (seconds === 0) return;

      decrease();
    }, 1000);

    return () => clearTimeout(idTimeout);
  }, [seconds]);

  return seconds;
};
