"use client";
import Title from "@components/components/title/title";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import ClientFeedback from "@components/components/clientFeedback/clientFeedback";
import Image from "next/image";
const HappyCustomers = () => {
  const [swipe, setSwipe] = useState(null);
  console.log(swipe);
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
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
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            onSwiper={setSwipe}
          >
            <SwiperSlide>
              <ClientFeedback
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                description={`We were not aware that our UK will is not valid in India .We received professional, friendly help throughout our appointment, putting us at ease and enabling us to understand and make the right decisions. Its important to understand if you have acquired a different citizenship .`}
                name={`Prince Mathew`}
                services={['Will']}
                shortWord={`UK will is not valid in India`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                shortWord={`It was personal audit of my Life`}
                description={`The process and information required is really high , prepared to spend time with the
advisers. Its worth it as I was not aware of many things and its an audit of your
personal documents. Number of different bank accounts to LIC policies, I am glad that
I have a record of everything to pass to my kids.`}
                name={`Chithra Hari`}
                services={[`Will`]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                shortWord={`I was not aware that I had no nominee in my LIC Policy`}
                description={`It was an eye opener that how bad I was on my legal documents and its records. I
have also chosen the Life Inventory service ,so I have every record and document
numbers in a single file from my village ‘’thandaper’’ number to bank account/LIC
nominee names which I had no clue. Thank you Team NRI Life.`}
                name={`Stephen Lukose`}
                services={[`Will`]}


              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback
                services={[`Visitor Visa`]}
                description={`The team guided me through the whole process, step by step guidance. stress free service, very impressed. They found be the cheapest in Medical insurance cover to UK .`}
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                name={`Baby John`}
                shortWord={`Experts *** I manged my parents visa over the Phone`}

              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientFeedback
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                shortWord={`Professionalism`}
                description={`It was for a property transaction, Step by step process. Documents returned within timeframe. Painless and straightforward process. Guided me till the UK embassy process.`}
                name={`Akshaya John`}
                services={[`Power of Attorney`]}

              />
            </SwiperSlide>

            <SwiperSlide>
              <ClientFeedback
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                shortWord={`Aadharam to English`}
                description={`I was worried that my kids may not be able to read all my life changing documents . Now I got a copy of all my adharmas in English and no one going to cheat my kids when I depart.`}
                name={`Raju Mathai`}
                services={[`Translation`]}

              />
            </SwiperSlide>

            <SwiperSlide>
              <ClientFeedback
                flag={<Image
                  src={`/images/happy-customers/flg.png`}
                  width={23.73}
                  height={23.73}
                />}
                shortWord={`Summery of my Life records`}
                description={`It was unbelievable that a list of document numbers of your life can be more than four pages. Bank Accounts ,LIC policy’s, village records and many other important lists in life.`}
                name={`Tijo Kurian`}
                services={[`Life Inventory`]}

              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        className={`w-[125px] mt-[50px] p-[13px] rounded-[40px] bg-[#E6F1F2] mx-auto flex justify-between`}
      >
        <button
          className={`w-[45px] h-[45px] rounded-full bg-[#0eabb1] flex justify-center items-center rotate-180`}
          // onClick={() => swipe.slidePrev()}
          ref={navigationPrevRef}
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
          // onClick={() => swipe.slideNext()}
          ref={navigationNextRef}
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
