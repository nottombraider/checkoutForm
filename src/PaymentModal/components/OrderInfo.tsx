import React from "react";

export const OrderInfo = (): JSX.Element => (
  <header className="text-white flex flex-col gap-3">
    <div className="text-yellow-300 text-xs">Order #123456</div>
    <div className="text-2xl">9 999, 99 $</div>
    <div>
      <div className="text-yellow-300 uppercase text-xs">Your order</div>
      <div className="text-xl">Product Name</div>
    </div>
    <div className="mt-4 text-sm">Pay during next 24:59</div>
    <div className="mt-auto w-44">
      <div className="text-yellow-300 uppercase text-xs">
        Additional Payment Info
      </div>
      <div className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
    </div>
  </header>
);
