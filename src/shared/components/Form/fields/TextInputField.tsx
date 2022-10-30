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
import { FcCheckmark, IoClose } from "react-icons/all";
import classnames from "classnames";
import { FieldErrorIcon, FieldValidIcon } from "./components";

type TextInputFieldOwnProps<TDataType> = InputBaseProps<TDataType>;

export type TextInputFieldProps<TDataType> =
  TextInputFieldOwnProps<TDataType> & { startIcon?: ReactNode };

export const TextInputField = <TDataType,>({
  name,
  startIcon,
  className,
  ...props
}: TextInputFieldProps<TDataType>): JSX.Element => {
  if (typeof name !== "string")
    throw new Error("TextInputField: name must be string");

  const { control } = useFormContext();
  const { field, fieldState } = useController<FieldValues>({
    control,
    name: name,
    defaultValue: "",
  });
  const { value, ...handlers } = field;

  const fieldError = fieldState.error as unknown as FieldError | undefined;
  const isError = Boolean(fieldError?.message);
  const isValid = Boolean(!isError && value);

  return (
    <div className={sharedFieldWrapper}>
      {startIcon}
      <input
        {...props}
        {...handlers}
        value={value}
        className={classnames(
          sharedFieldStyles(isError, Boolean(startIcon), isValid),
          className
        )}
      />
      {isValid && <FieldValidIcon />}
      {isError && <FieldErrorIcon />}
      {isError && <span className={errorMessage}>{fieldError?.message}</span>}
    </div>
  );
};
