import React from "react";

import { DeliveryDetails } from "../DeliveryDetails";
import { BillingAddress } from "../BillingDetails";
import { PaymentMethods } from "../PaymentMethods";
import { GoNextStepFn } from "./types";

export const steps = [
  {
    title: "Delivery details",
    render: (goNextStep: GoNextStepFn): JSX.Element => (
      <DeliveryDetails goNextStep={goNextStep} />
    ),
  },
  {
    title: "Billing Address",
    render: (goNextStep: GoNextStepFn): JSX.Element => (
      <BillingAddress goNextStep={goNextStep} />
    ),
  },
  {
    title: "Select Payment Method",
    render: () => <PaymentMethods />,
  },
];
