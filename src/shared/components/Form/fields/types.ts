export type InputBaseProps<TDataType> = Readonly<
  Pick<JSX.IntrinsicElements["input"], "className" | "placeholder" | "type"> & {
    name: keyof TDataType;
  }
>;
