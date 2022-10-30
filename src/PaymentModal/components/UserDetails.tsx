import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../shared";
import { FormBody, paymentMethodValidationSchema } from "../FormSteps";

export const UserDetails = (): JSX.Element => (
  <main className="h-full overflow-x-hidden overflow-y-auto scrollbar md:pr-3 rounded w-full md:w-[fit-content]">
    <Form
      resolver={yupResolver(paymentMethodValidationSchema)}
      onSubmit={() => (formValues) => {
        console.log("formValues:", formValues);
      }}
      mode="onChange"
      className="h-full overflow-x-hidden rounded scrollbar"
    >
      <FormBody />
    </Form>
  </main>
);
