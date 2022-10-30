import { boolean } from "yup";
import { addressValidationRules } from "./common";

export const billingDetailsValidationRules = {
  billingAsDelivery: boolean().optional(),
  billing: addressValidationRules,
};
