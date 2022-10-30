import { object } from "yup";
import { deliveryDetailsValidationRules } from "./deliveryDetailsValidationRules";
import { billingDetailsValidationRules } from "./billingDetailsValidationRules";

export const paymentMethodValidationSchema = object({
  ...deliveryDetailsValidationRules,
  ...billingDetailsValidationRules,
});
