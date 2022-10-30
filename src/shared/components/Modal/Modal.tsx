import React from "react";
import {
  AiOutlineCopyright,
  FaCcMastercard,
  FaLock,
  GiPayMoney,
  GrMastercard,
  ImLock,
  IoClose,
  IoLogoPaypal,
  RiSecurePaymentFill,
  SiVisa,
  SiWebmoney,
} from "react-icons/all";

import { Button } from "../Button";
import { ModalProps } from "./Modal.types";

export const Modal = ({ onClose, children }: ModalProps): JSX.Element => (
  <section className="fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-70 z-10 flex flex-col items-center py-2">
    <div className="flex flex-col gap-2">
      <Button variant="icon" className="text-white self-end" onClick={onClose}>
        <IoClose className="w-5 h-5" />
      </Button>
      <main className="px-6 max-h-[calc(100vh-7.75rem)] overflow-y-auto scrollbar">
        {children}
      </main>
      <footer className="px-6 text-gray-200 text-xs">
        <div className="flex">
          <div className="flex items-center gap-2">
            <SiVisa className="w-14 h-12" />
            <FaCcMastercard className="w-10 h-7" />
            <RiSecurePaymentFill className="w-10 h-7" />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <FaLock className="w-3.5 h-3.5" />
            <span className="italic">secure payment with</span>
            <GiPayMoney className="w-9 h-7" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlineCopyright />
          <span>2000-2020 Payment system</span>
          <div className="border-r h-3" />
          <span>Company Name Ltd.</span>
        </div>
      </footer>
    </div>
  </section>
);
