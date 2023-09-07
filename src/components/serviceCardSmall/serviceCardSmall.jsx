import Link from "next/link";
import React from "react";

const ServiceCardSmall = ({ title, href }) => {
  return (
    <Link
      href={href || `/`}
      className={`w-full relative bg-[#F5F5F5] p-[18px] h-full flex flex-col rounded-[4px] overflow-hidden hover:shadow-md shadow-[#09757A] transition-all duration-300 hover:translate-y-[-5px]`}
    >
      <h4
        className={`text-[18px] lg:text-[20px] 2xl:text-[22px] leading-[1.4] text-[#09757A] mb-[30px] max-w-[80%]`}
      >
        {title}
      </h4>
      <div className={`w-full flex mt-auto`}>
        <div className={`flex justify-between items-center w-full`}>
          <p>Learn more</p>
          <div
            className={`w-[37px] h-[37px] rounded-full bg-[#09757A] flex justify-center items-center`}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M0.46967 11.5303C0.176777 11.2374 0.176777 10.7626 0.46967 10.4697L4.93934 6L0.469669 1.53033C0.176776 1.23744 0.176776 0.762563 0.469669 0.469669C0.762563 0.176776 1.23744 0.176776 1.53033 0.469669L7.06066 6L1.53033 11.5303C1.23744 11.8232 0.762563 11.8232 0.46967 11.5303Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardSmall;
