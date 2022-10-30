import { useCountdown } from "./useCountdown";

const TIMER_25_MINUTES_IN_SECONDS = 1500;

const format = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const leftSec = (seconds % 60).toString().padStart(2, "0");

  return `${mins}:${leftSec}`;
};

export const CountDownTimer = (): JSX.Element => {
  const seconds = useCountdown(TIMER_25_MINUTES_IN_SECONDS);

  return <span className="text-yellow-300">{format(seconds)}</span>;
};
