"use client"
import BreadCrumbs from "@components/components/breadCrumbs";
import CartDetails from "@components/components/cartDetails";
import { useMakePayment } from "@components/hooks/useMakePayment";
import React from "react";

const CartPage = () => {
  const { makePayment } = useMakePayment()
  return (
    <>
      <BreadCrumbs title={`Cart`} />
      <CartDetails />
      {/* this is commented and i'm going to make this changes live */}
      {/* <button onClick={() => makePayment({invoice_id : 123, total : 1, productId : 123, setIsLoading : false})}>test payment</button> */}
    </>
  );
};

export default CartPage;
