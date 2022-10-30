import { string } from "yup";
import { addressValidationRules } from "./common";

const fullNameRegex = /(^\w{2,16})([ ]{1})(\w{2,16})/g;

export const deliveryDetailsValidationRules = {
  fullName: string()
    .required("Full name is required")
    .matches(fullNameRegex, "Provide first and last names"),
  phoneNumber: string()
    .required("Phone number is required")
    .min(18, "Invalid phone number"),
  delivery: addressValidationRules,
  orderComment: string().optional(),
};
