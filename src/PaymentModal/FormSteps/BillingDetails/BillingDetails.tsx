import React from "react";
import {
  BiFlag,
  IoHomeOutline,
  IoLocationOutline,
  TbMailbox,
} from "react-icons/all";

import {
  Button,
  CheckboxField,
  fieldIcon,
  TextInputField,
  useSyncBillingWithDeliveryAddress,
} from "../../../shared";
import { billingDetailsStepNames } from "./billingDetailsFieldNames";
import { UseNumberActions } from "react-hanger/array";

export const BillingAddress = ({
  goNextStep,
}: {
  goNextStep: UseNumberActions["increase"];
}): JSX.Element => {
  useSyncBillingWithDeliveryAddress();

  return (
    <>
      <CheckboxField
        name={billingDetailsStepNames.billingAsDelivery}
        labelText={
          <span className="text-xs uppercase text-indigo-700">
            The same as delivery
          </span>
        }
      />
      <TextInputField
        name={billingDetailsStepNames.zip}
        placeholder="Zip"
        type="number"
        startIcon={<TbMailbox className={fieldIcon} />}
      />
      <TextInputField
        name={billingDetailsStepNames.region}
        placeholder="Region"
        startIcon={<BiFlag className={fieldIcon} />}
      />
      <TextInputField
        name={billingDetailsStepNames.city}
        placeholder="City"
        startIcon={<IoLocationOutline className={fieldIcon} />}
      />
      <TextInputField
        name={billingDetailsStepNames.street}
        placeholder="Street name"
        startIcon={<IoHomeOutline className={fieldIcon} />}
      />
      <Button
        className="mt-5"
        onClick={(e) => {
          e.preventDefault();

          goNextStep();
        }}
      >
        Next
      </Button>
    </>
  );
};
