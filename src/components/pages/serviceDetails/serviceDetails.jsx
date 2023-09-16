import BreadCrumbs from "@components/components/breadCrumbs";
import ServiceDetailsContent from "@components/widgets/serviceDetailsContent";
import React from "react";

const ServiceDetails = ({ data }) => {
  console.log();
  return (
    <>
      <BreadCrumbs title={data[0].category_name} price={data[0].price} />
      <ServiceDetailsContent {...data[0]} />
    </>
  );
};

export default ServiceDetails;
