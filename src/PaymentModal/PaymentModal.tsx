import React from "react";
import { OrderInfo, UserDetails } from "./components";
import { PaymentModalProps } from "./PaymentModal.types";
import { Modal } from "../shared";

export const PaymentModal = ({ onClose }: PaymentModalProps): JSX.Element => (
  <Modal onClose={onClose}>
    <section className="p-1 bg-indigo-700 flex flex-wrap justify-between rounded-md md:h-full md:p-6 md:pr-2 md:w-[35rem]">
      <OrderInfo />
      <UserDetails />
    </section>
  </Modal>
);
