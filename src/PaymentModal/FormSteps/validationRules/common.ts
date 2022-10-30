import { object, string } from "yup";

const streetRegex = /^\s*\S+(?:\s+\S+){2}/g;

export const addressValidationRules = object({
  zip: string().required("Zip code is required").min(6, "Invalid zip code"),
  region: string().required("Region is required").min(2, "Invalid region"),
  city: string().required("City is required").min(2, "Invalid city"),
  street: string()
    .required("Street name is required")
    .matches(streetRegex, "Invalid street details"),
});
