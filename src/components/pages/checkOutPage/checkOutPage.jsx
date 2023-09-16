"use client";
import BreadCrumbs from "@components/components/breadCrumbs";
import Checkout from "@components/components/checkout/checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const CheckOutPage = ({ data }) => {
  const { order_amount, order_amount_sub, tax_amount } = data[0];
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
    >
      <div className={`w-full`}>
        <BreadCrumbs />
      </div>
      <div className={`w-full pb-[50px] min-h-[100vh]`}>
        <div className={`container mx-auto px-[15px]`}>
          <div className={`w-full flex flex-wrap relative -m-[10px]`}>
            <div className={`w-2/3 p-[10px] pt-[80px]`}>
              <Checkout amount={order_amount} />
            </div>

            <div className={`w-1/3 p-[10px] mt-[30px]`}>
              <div className={`w-full flex justify-end`}>
                <button
                  className={`underline text-[16px] mb-[15px] opacity-50`}
                >
                  Clear cart
                </button>
              </div>
              <div className={`w-full bg-[#F8F5F5] p-[20px] text-[18px]`}>
                <h3 className={`font-medium mb-[20px]`}>Cart Summary</h3>
                <div
                  className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b`}
                >
                  <div className={`w-1/2`}>Sub total Price</div>
                  <div className={`w-1/2 font-medium`}>${order_amount_sub}</div>
                </div>
                <div
                  className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b border-[#b1b1b1]`}
                >
                  <div className={`w-1/2`}>Tax (8%)</div>
                  <div className={`w-1/2 font-medium`}>${tax_amount}</div>
                </div>

                <div className={`w-full flex flex-wrap `}>
                  <div className={`w-1/2 font-medium`}>Total</div>
                  <div className={`w-1/2 font-medium`}>${order_amount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full relative`}></div>
    </PayPalScriptProvider>
  );
};

export default CheckOutPage;
