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
    <div className={`w-full relative py-[20x] md:py-[50px]`}>
      <div className={`container mx-auto px-[15px]`}>
        <div className={`flex flex-wrap m-[-10px]`}>
          <div className={`w-2/3   p-[10px]`}>
            <ServiceDetailItem
              category_name={category_name}
              price={price}
              content={content}
              category_id={category_id}
              handleBuyNow={handleBuyNow}
            />
          </div>
          <div className={`w-1/3 p-[10px]`}>
            {filteredData.map((item, index) => {
              return (
                <div className={`w-full relative mb-[20px] `} key={index}>
                  <ServiceCard {...item} />
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
