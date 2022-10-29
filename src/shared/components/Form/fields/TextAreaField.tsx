import React from "react";
import {
  FieldError,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { InputBaseProps } from "./types";
import { errorMessage, sharedFieldWrapper, sharedFieldStyles } from "./consts";

type TextAreaFieldOwnProps<TDataType> = Pick<
  JSX.IntrinsicElements["textarea"],
  "rows" | "cols" | "onKeyUp" | "onKeyDown"
> &
  InputBaseProps<TDataType>;

export type TextAreaFieldProps<TDataType> = TextAreaFieldOwnProps<TDataType>;

export const TextAreaField = <TDataType,>({
  name,
  className,
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

  return (
    <div className={sharedFieldWrapper}>
      <textarea
        {...props}
        {...field}
        className={`${sharedFieldStyles(isError)} resize-y`}
      />
      {isError && <span className={errorMessage}>{fieldError?.message}</span>}
    </div>
  );
};
