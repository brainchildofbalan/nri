import ServiceCard from "@components/components/serviceCard";
import ServiceDetailItem from "@components/components/serviceDetailItem";
import React from "react";

const ServiceDetailsContent = ({
  category_name,
  category_id,
  more_services,
  price,
  content,
  han,
  handleBuyNow,
}) => {
  const filteredData = more_services.filter(
    (item) => item.category_id !== category_id
  );
  return (
    <div className={`w-full relative py-[20px] md:py-[50px]`}>
      <div className={`container mx-auto px-[15px]`}>
        <div className={`flex flex-wrap m-[-10px]`}>
          <div className={`w-full lg:w-2/3   p-[10px]`}>
            <ServiceDetailItem
              category_name={category_name}
              price={price}
              content={content}
              category_id={category_id}
              handleBuyNow={handleBuyNow}
            />
          </div>
          <div className={`w-full lg:w-1/3 p-[10px] flex flex-wrap`}>
            {filteredData.map((item, index) => {
              return (
                <div
                  className={`w-full sm:w-1/2 lg:w-full relative lg:mb-[20px] p-[5px] lg:p-[0] `}
                  key={index}
                >
                  <ServiceCard {...item} isBgGrey />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
