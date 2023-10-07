import BreadCrumbs from "@components/components/breadCrumbs";
import CartDetails from "@components/components/cartDetails";
import React from "react";

const CartPage = () => {
  return (
    <>
      <BreadCrumbs title={`Cart`} />
      <CartDetails />
    </>
  );
};

export default CartPage;
