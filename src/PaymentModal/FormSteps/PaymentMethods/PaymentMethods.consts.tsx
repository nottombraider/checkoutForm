import {
  AiFillApple,
  BsBank,
  BsCashCoin,
  BsCreditCard2Front,
  FcGoogle,
  HiOutlineDevicePhoneMobile,
  SiSamsungpay,
  TfiWallet,
} from "react-icons/all";

import { PaymentMethodsList } from "./PaymentMethods.types";

export const paymentMethodsList: PaymentMethodsList = [
  {
    paymentIcon: <AiFillApple />,
    title: "Pay",
    ownStyles: "text-xl justify-center",
  },
  {
    paymentIcon: <BsCreditCard2Front className="w-10 h-6" />,
    title: "Credit Card",
    ownStyles: "uppercase text-xs text-indigo-600 gap-3",
  },
  {
    paymentIcon: <BsCashCoin className="w-10 h-6" />,
    title: (
      <div className="flex flex-col gap-1">
        <span>Cash</span>
        <span className="normal-case text-gray-400 font-normal w-32 leading-tight text-[0.65rem]">
          Payment via ATM or T-mobile stores
        </span>
      </div>
    ),
    ownStyles: "uppercase text-xs text-indigo-600 gap-3 relative",
  },
  {
    paymentIcon: <TfiWallet className="w-10 h-6" />,
    title: "E-Wallet",
    ownStyles: "text-sm text-indigo-600 gap-3",
  },
  {
    paymentIcon: <BsBank className="w-10 h-6" />,
    title: "E-Bank",
    ownStyles: "text-sm text-indigo-600 gap-3",
  },
  {
    paymentIcon: <HiOutlineDevicePhoneMobile className="w-10 h-6" />,
    title: "Cellular Provider",
    ownStyles: "text-sm text-indigo-600 gap-3",
  },
  {
    paymentIcon: <FcGoogle />,
    title: "Pay",
    ownStyles: "text-xl justify-center",
  },
  {
    paymentIcon: <SiSamsungpay className="w-10 h-10" />,
    ownStyles: "text-xl justify-center text-blue-600",
  },
];
