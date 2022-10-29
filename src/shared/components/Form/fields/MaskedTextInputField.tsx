import React, { ComponentProps } from "react";
import InputMask, { InputMaskProps } from "react-input-mask";
import { FieldError, useController, useFormContext } from "react-hook-form";
import { InputBaseProps } from "./types";
import { errorMessage, sharedFieldStyles, sharedFieldWrapper } from "./consts";

export type TMaskedTextInputFieldProps<TDataType> = InputBaseProps<TDataType> &
  InputMaskProps;

export const MaskedTextInputField = <TDataType,>({
  name,
  mask,
  maskChar,
  formatChars,
  ...props
}: TMaskedTextInputFieldProps<TDataType>): JSX.Element => {
  const fieldName = name as string;
  const { control } = useFormContext();
  const {
    field: { onBlur, value = "", ...handlers },
    fieldState,
  } = useController({
    control,
    name: fieldName,
  });

  const fieldError = fieldState.error as unknown as FieldError | undefined;
  const isError = Boolean(fieldError?.message);

  return (
    <div className={sharedFieldWrapper}>
      <InputMask
        mask={mask}
        maskChar={maskChar}
        formatChars={formatChars}
        value={value}
        className={sharedFieldStyles(isError)}
        {...handlers}
        {...props}
      />
      {isError && <span className={errorMessage}>{fieldError?.message}</span>}
    </div>
  );
};
