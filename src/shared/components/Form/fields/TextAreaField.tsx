import React, { ReactNode } from "react";
import {
  FieldError,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { InputBaseProps } from "./types";
import {
  errorMessage,
  sharedFieldWrapper,
  sharedFieldStyles,
  endIconIdentifier,
} from "./styles";
import { BsCheck2, IoClose } from "react-icons/all";
import classnames from "classnames";
import { FieldErrorIcon, FieldValidIcon } from "./components";

type TextAreaFieldOwnProps<TDataType> = Pick<
  JSX.IntrinsicElements["textarea"],
  "rows" | "cols" | "onKeyUp" | "onKeyDown"
> &
  InputBaseProps<TDataType>;

export type TextAreaFieldProps<TDataType> = TextAreaFieldOwnProps<TDataType> & {
  startIcon?: ReactNode;
};

export const TextAreaField = <TDataType,>({
  name,
  className,
  startIcon,
  ...props
}: TextAreaFieldProps<TDataType>): JSX.Element => {
  if (typeof name !== "string")
    throw new Error("TextAreaField: name must be string");

  const { control } = useFormContext();
  const { field, fieldState } = useController<FieldValues>({
    control,
    name: name,
    defaultValue: "",
  });

  const fieldError = fieldState.error as unknown as FieldError | undefined;
  const isError = Boolean(fieldError?.message);
  const isValid = Boolean(!isError && field.value && fieldState.isDirty);

  return (
    <div className={sharedFieldWrapper}>
      {startIcon}
      <textarea
        {...props}
        {...field}
        className={classnames(
          "min-h-[3rem] resize-none",
          sharedFieldStyles(isError, Boolean(startIcon), isValid)
        )}
      />
      {isValid && <FieldValidIcon />}
      {isError && <FieldErrorIcon />}
      {isError && <span className={errorMessage}>{fieldError?.message}</span>}
    </div>
  );
};
