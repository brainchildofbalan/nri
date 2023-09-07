import Button from "@components/components/button/button";
import ServiceCardSmall from "@components/components/serviceCardSmall/serviceCardSmall";
import Title from "@components/components/title/title";
import React from "react";

const FeaturedServices = () => {
  return (
    <div className={`w-full flex flex-col pt-[50px] pb-[50px] overflow-hidden`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`w-full relative mb-[15px]`}>
          <Title title={`Our best services`} />
        </div>
        <div className={`flex flex-wrap m-[-6px]`}>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Will`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Power of attorney`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Succession Certificate`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Land tax`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Birth Certificates`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Building Tax`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`PAN Card Application`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Dependent Visa`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Single Status Certificate`} />
          </div>
          <div
            className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
          >
            <ServiceCardSmall title={`Air Tickets`} />
          </div>
        </div>
        <div className={`flex justify-center mt-[30px]`}>
          <Button text={`View all services`} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
