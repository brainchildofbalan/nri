import BreadCrumbs from "@components/components/breadCrumbs/breadCrumbs";
import Services from "@components/widgets/services/services";
import React from "react";

const ServicesAndPackagesPage = ({ total }) => {
  return (
    <>
      <BreadCrumbs title={`Services`} />
      <Services data={total} />
    </>
  );
};

export default ServicesAndPackagesPage;
