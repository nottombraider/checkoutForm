import { UseNumberActions } from "react-hanger/array";

export type FormHeaderProps = {
  goBackStep: UseNumberActions["decrease"];
  title: string;
};
