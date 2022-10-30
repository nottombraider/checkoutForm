import React from "react";
import { OrderInfo, UserDetails } from "./components";
import { PaymentModalProps } from "./PaymentModal.types";
import { Modal } from "../shared";

export const PaymentModal = ({
  onClose,
}: PaymentModalProps): JSX.Element | null => {
  return (
    <Modal onClose={onClose}>
      <section className="p-6 max-w-[35rem] flex bg-indigo-700 justify-between rounded-md">
        <OrderInfo />
        <UserDetails />
      </section>
    </Modal>
  );
};
