import ServiceCard from "@components/components/serviceCard/serviceCard";
import React from "react";

const Services = ({ data }) => {
  return (
    <div className={`w-full relative py-[20px] md:py-[50px]`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`relative flex flex-wrap m-[-10px]`}>
          {data.length !== 0
            ? data.map((item, index) => {
                return (
                  <div
                    className={`w-full md:w-1/2 lg:w-1/3 p-[10px]`}
                    key={index}
                  >
                    <ServiceCard {...item} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Services;
