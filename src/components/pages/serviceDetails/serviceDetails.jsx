"use client";
import BreadCrumbs from "@components/components/breadCrumbs";
import ServiceDetailsContent from "@components/widgets/serviceDetailsContent";
import React from "react";
import { useServiceDetails } from "./useServiceDetails";

const ServiceDetails = ({ data }) => {
  const { handleBuyNow } = useServiceDetails();
  console.log();
  return (
    // { category_name, price, category_id }
    <>
      <BreadCrumbs
        title={data[0].category_name}
        price={data[0].price}
        category_id={data[0].category_id}
        handleBuyNow={handleBuyNow}
      />
      <ServiceDetailsContent {...data[0]} handleBuyNow={handleBuyNow} />
    </>
  );
};

export default ServiceDetails;
