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
  FadeOut,
} from "../../../shared";
import { billingDetailsStepNames } from "./billingDetailsFieldNames";
import { GoNextStepFn } from "../consts/types";
import classnames from "classnames";

export const BillingAddress = ({
  goNextStep,
}: {
  goNextStep: GoNextStepFn;
}): JSX.Element => {
  useSyncBillingWithDeliveryAddress();

  return (
    <FadeOut
      action={(fadeOut, toggle) => (
        <Button
          disabled={fadeOut}
          className={classnames("mt-5", { "cursor-none": fadeOut })}
          onClick={(e) => {
            e.preventDefault();

            toggle(goNextStep);
          }}
        >
          Next
        </Button>
      )}
    >
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
    </FadeOut>
  );
};
