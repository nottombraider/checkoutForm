import { ReactNode } from "react";

export type PaymentMethod = {
  paymentIcon: ReactNode;
  title?: ReactNode;
  ownStyles?: string;
};

export type PaymentMethodsList = ReadonlyArray<PaymentMethod>;
