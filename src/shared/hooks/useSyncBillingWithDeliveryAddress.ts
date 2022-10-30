import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import {
  billingDetailsStepNames,
  emptyAddress,
} from "../../PaymentModal/FormSteps";

export const useSyncBillingWithDeliveryAddress = () => {
  const { watch, getValues, setValue } = useFormContext();

  const billingAsDelivery = watch(billingDetailsStepNames.billingAsDelivery);

  useEffect(() => {
    if (billingAsDelivery) {
      const { delivery } = getValues();

      setValue(billingDetailsStepNames.billing, delivery);
    } else {
      setValue(billingDetailsStepNames.billing, emptyAddress);
    }
  }, [billingAsDelivery]);
};
