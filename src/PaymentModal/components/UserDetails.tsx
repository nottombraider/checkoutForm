import { Form } from "../../shared";
import { FormBody } from "../FormSteps";
import React from "react";

export const UserDetails = (): JSX.Element => (
  <main>
    <Form
      onSubmit={() => (formValues) => {
        console.log("formValues:", formValues);
      }}
      className="h-full"
    >
      <FormBody />
    </Form>
  </main>
);
