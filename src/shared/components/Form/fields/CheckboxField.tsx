import React from "react";
import { FieldError, useController, useFormContext } from "react-hook-form";

import { RegisterOptions } from "react-hook-form/dist/types/validator";
import { InputBaseProps } from "./types";

type CheckboxFieldOwnProps = {
  config?: RegisterOptions;
};

type CheckboxFieldProps<TData> = InputBaseProps<TData> & CheckboxFieldOwnProps;

export const CheckboxField = <TData,>({
  name,
  ...props
}: CheckboxFieldProps<TData>): JSX.Element => {
  if (typeof name !== "string")
    throw new Error("TextAreaField: name must be string");

  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    // @ts-expect-error library broken type
    defaultValue: false,
    name: name,
  });

  const fieldError = fieldState.error as unknown as FieldError | undefined;

  return (
    <div>
      <input
        type="checkbox"
        {...props}
        {...field}
        checked={field.value}
        className="w-4 h-4"
      />
      {fieldError?.message && <span>{fieldError.message}</span>}
    </div>
  );
};
