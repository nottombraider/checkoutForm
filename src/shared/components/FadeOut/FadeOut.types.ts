import { ReactNode } from "react";

type HandleToggle = (callback: VoidFunction) => void;

export type FadeOutProps = {
  children: ((toggle: HandleToggle) => ReactNode) | Array<ReactNode>;
  action: FadeOutProps["children"];
};
