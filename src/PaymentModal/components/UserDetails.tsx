import { Form } from "../../shared";
import { FormBody } from "../FormSteps";
import React from "react";

export const UserDetails = (): JSX.Element => (
  <main className="h-full overflow-auto scrollbar pr-4 rounded">
    <Form
      onSubmit={() => (formValues) => {
        console.log("formValues:", formValues);
      }}
      className="h-full rounded"
    >
      <FormBody />
    </Form>
  </main>
);
