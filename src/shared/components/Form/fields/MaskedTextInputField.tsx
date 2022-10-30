import React, { ComponentProps, ReactNode } from "react";
import InputMask, { InputMaskProps } from "react-input-mask";
import { FieldError, useController, useFormContext } from "react-hook-form";
import { InputBaseProps } from "./types";
import {
  endIconIdentifier,
  errorMessage,
  sharedFieldStyles,
  sharedFieldWrapper,
} from "./styles";
import { FcCheckmark, IoClose } from "react-icons/all";
import { FieldValidIcon } from "./components";
import { FieldErrorIcon } from "./components/FieldErrorIcon";

export type TMaskedTextInputFieldProps<TDataType> = InputBaseProps<TDataType> &
  InputMaskProps & { startIcon?: ReactNode };

export const MaskedTextInputField = <TDataType,>({
  name,
  mask,
  maskChar,
  formatChars,
  startIcon,
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
  const isValid = Boolean(!isError && value && fieldState.isDirty);

  return (
    <div className={sharedFieldWrapper}>
      {startIcon}
      <InputMask
        mask={mask}
        maskChar={maskChar}
        formatChars={formatChars}
        value={value}
        className={sharedFieldStyles(isError, Boolean(startIcon), isValid)}
        {...handlers}
        {...props}
      />
      {isValid && <FieldValidIcon />}
      {isError && <FieldErrorIcon />}
      {isError && <span className={errorMessage}>{fieldError?.message}</span>}
    </div>
  );
};
