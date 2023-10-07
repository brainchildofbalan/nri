import Button from "@components/components/button/button";
import ServiceCardSmall from "@components/components/serviceCardSmall/serviceCardSmall";
import Title from "@components/components/title/title";
import React from "react";

const FeaturedServices = ({ featured }) => {
  return (
    <div className={`w-full flex flex-col pt-[20px] pb-[40px] overflow-hidden`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`w-full relative mb-[15px]`}>
          <Title title={`Our best services`} />
        </div>
        <div className={`flex flex-wrap m-[-6px]`}>
          {featured &&
            featured.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-[4px] md:p-[6px]`}
                >
                  <ServiceCardSmall
                    title={item.category_name}
                    href={item.url}
                  />
                </div>
              );
            })}
        </div>
        <div className={`flex justify-center mt-[30px]`}>
          <Button as={`link`} href={`/services`} text={`View all services`} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
