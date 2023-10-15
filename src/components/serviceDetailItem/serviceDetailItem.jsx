import Image from "next/image";
import React from "react";
import Button from "../button";
import Link from "next/link";

const ServiceDetailItem = ({
  category_name,
  price,
  content,
  category_id,
  handleBuyNow,
  image
}) => {
  return (
    <div className={`w-full relative flex flex-col lg:pr-[30px]`}>
      <div className={`w-full aspect-[780/250] relative`}>
        {
          image?.length > 0 ?
            <Image
              src={`${process.env.NEXT_PUBLIC_APP_URL}/uploads/${image[0].filename}`}
              quality={99.8}
              priority
              fill
              alt={`banner`}
              className="object-cover object-[70%]"
            /> :
            <Image
              src={`/images/banner/banner.jpg`}
              quality={99.8}
              priority
              fill
              alt={`banner`}
              className="object-cover object-[70%]"
            />
        }
      </div>
      <div
        className={`w-full flex flex-col md:flex-row justify-between mt-[30px] items-center`}
      >
        <h2
          className={`w-full md:w-auto flex flex-1 text-[25px]  lg:text-[30px] xl:text-[36px] leading-[1.4] mb-0 font-medium`}
        >
          {category_name}
        </h2>
        <p className="w-full md:w-auto text-[14px] sm:text-[16px]">
          <span className={`opacity-40`}>Estimated time for completion:</span>{" "}
          <b>1 Week</b>
        </p>
      </div>
      <div
        className={`w-full relative mt-[10px] text-[16px] leading-[1.5] [&>*>ul]:list-disc [&>*>ul]:pl-[40px] [&>*>ul>li]:mb-[12px] [&>*>ul>li]:relative [&>*::after]:bg-black]`}
      >
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div
        className={`w-full relative flex flex-wrap md:flex-nowrap pt-[30px] mt-[20px] border-t`}
      >
        <div className={`w-full sm:w-auto flex items-center`}>
          <p className={`pr-[10px] hidden md:flex`}>Price</p>
          <p
            className={`mr-[10px] md:mr-[15px] border border-[#ED781A] rounded-[3px] overflow-hidden h-[40px] md:h-[48px] px-[40px] flex items-center justify-center font-bold text-[20px]`}
          >
            ₹{price}
          </p>
          <Button
            text={`Buy now`}
            classNames={`!bg-[#ED781A] !w-full !md:w-auto`}
            onclick={() => handleBuyNow({ category_name, price, category_id })}
          />
        </div>

        <div
          className={`w-full sm:w-auto flex ml-auto items-center mt-2 sm:mt-0`}
        >
          <a
            href={`https://wa.me/+919645550074 ?text=I'm%20interested%20in%20your%20service`}
            className={`w-full lg:mr-[15px] border bg-[#25D366] hover:bg-[#1d9b41] text-white rounded-[3px] overflow-hidden h-[42px] md:h-[48px] px-[20px] flex items-center justify-center transition-all duration-300 border-[#25D366]`}
          >
            <span>
              <Image
                src={`/whatsapp.svg`}
                width={20}
                height={20}
                alt="this is a whatsapp button"
                className="mr-[10px]"
              />
            </span>
            Whatsapp now
          </a>
          <div className={`w-auto hidden lg:flex`}>
            <Button text={`Contact us`} as={`link`} href={`/contact-us`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailItem;
