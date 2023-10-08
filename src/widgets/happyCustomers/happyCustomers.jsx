"use client";
import Title from "@components/components/title/title";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ClientFeedback from "@components/components/clientFeedback/clientFeedback";
const HappyCustomers = () => {
  return (
    <section className={`w-full relative py-[40px]`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`w-full flex justify-center mb-[35px]`}>
          <Title title={`Happy customers`} />
        </div>
        <div className={`flex flex-wrap w-full`}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
              991: {
                // width: 768,
                slidesPerView: 4,
              },
            }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ClientFeedback />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        className={`w-[125px] mt-[50px] p-[13px] rounded-[40px] bg-[#E6F1F2] mx-auto flex justify-between`}
      >
        <button
          className={`w-[45px] h-[45px] rounded-full bg-[#0eabb1] flex justify-center items-center rotate-180`}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.46967 11.5303C0.176777 11.2374 0.176777 10.7626 0.46967 10.4697L4.93934 6L0.469669 1.53033C0.176776 1.23744 0.176776 0.762563 0.469669 0.469669C0.762563 0.176776 1.23744 0.176776 1.53033 0.469669L7.06066 6L1.53033 11.5303C1.23744 11.8232 0.762563 11.8232 0.46967 11.5303Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          className={`w-[45px] h-[45px] rounded-full bg-[#0eabb1] flex justify-center items-center`}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.46967 11.5303C0.176777 11.2374 0.176777 10.7626 0.46967 10.4697L4.93934 6L0.469669 1.53033C0.176776 1.23744 0.176776 0.762563 0.469669 0.469669C0.762563 0.176776 1.23744 0.176776 1.53033 0.469669L7.06066 6L1.53033 11.5303C1.23744 11.8232 0.762563 11.8232 0.46967 11.5303Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HappyCustomers;
