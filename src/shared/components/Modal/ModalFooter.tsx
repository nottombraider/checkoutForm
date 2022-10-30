import React from "react";
import {
  AiOutlineCopyright,
  FaCcMastercard,
  FaLock,
  GiPayMoney,
  RiSecurePaymentFill,
  SiVisa,
} from "react-icons/all";

export const ModalFooter = (): JSX.Element => (
  <footer className="px-6 text-gray-200 text-[0.5rem] md:text-xs">
    <div className="flex flex-col md:flex-row">
      <div className="flex items-center gap-1 md:gap-2">
        <SiVisa className="w-10 h-8" />
        <FaCcMastercard className="w-10 h-6" />
        <RiSecurePaymentFill className="w-8 h-6" />
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <FaLock className="w-3.5 h-3.5" />
        <span className="italic">secure payment with</span>
        <GiPayMoney className="w-9 h-7" />
      </div>
    </div>
    <div className="flex gap-2 items-center mt-2 md:mt-0">
      <AiOutlineCopyright />
      <span>2000-2020 Payment system</span>
      <div className="border-r h-3" />
      <span>Company Name Ltd.</span>
    </div>
  </footer>
);
