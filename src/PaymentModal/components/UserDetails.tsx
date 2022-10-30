import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../shared";
import { FormBody, paymentMethodValidationSchema } from "../FormSteps";

export const UserDetails = (): JSX.Element => {
  return (
    <main className="h-full overflow-auto scrollbar md:pr-4 rounded w-full md:w-[fit-content]">
      <Form
        resolver={yupResolver(paymentMethodValidationSchema)}
        onSubmit={() => (formValues) => {
          console.log("formValues:", formValues);
        }}
        mode="onChange"
        className="h-full rounded"
      >
        <FormBody />
      </Form>
    </main>
  );
};
