import React from "react";
import {
  BiFlag,
  HiOutlineDevicePhoneMobile,
  IoHomeOutline,
  IoLocationOutline,
  IoPersonOutline,
  MdOutlineModeComment,
  TbMailbox,
} from "react-icons/all";
import classnames from "classnames";

import {
  Button,
  fieldIcon,
  MaskedTextInputField,
  TextAreaField,
  TextInputField,
  FadeOut,
} from "../../../shared";
import { deliveryDetailsStepNames } from "./deliveryDetailsFieldNames";
import { GoNextStepFn } from "../consts/types";

export const DeliveryDetails = ({
  goNextStep,
}: {
  goNextStep: GoNextStepFn;
}): JSX.Element => {
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
      <TextInputField
        name={deliveryDetailsStepNames.fullName}
        placeholder="Name"
        startIcon={<IoPersonOutline className={fieldIcon} />}
      />
      <MaskedTextInputField
        mask="+7 (999) 999-99-99"
        maskChar=""
        name={deliveryDetailsStepNames.phoneNumber}
        placeholder="Phone number"
        startIcon={<HiOutlineDevicePhoneMobile className={fieldIcon} />}
      />
      <TextInputField
        name={deliveryDetailsStepNames.zip}
        placeholder="Zip"
        type="number"
        startIcon={<TbMailbox className={fieldIcon} />}
      />
      <TextInputField
        name={deliveryDetailsStepNames.region}
        placeholder="Region"
        startIcon={<BiFlag className={fieldIcon} />}
      />
      <TextInputField
        name={deliveryDetailsStepNames.city}
        placeholder="City"
        startIcon={<IoLocationOutline className={fieldIcon} />}
      />
      <TextInputField
        name={deliveryDetailsStepNames.street}
        placeholder="Street name"
        startIcon={<IoHomeOutline className={fieldIcon} />}
      />
      <TextAreaField
        name={deliveryDetailsStepNames.orderComment}
        placeholder="Order comment"
        startIcon={<MdOutlineModeComment className={fieldIcon} />}
      />
    </FadeOut>
  );
};
