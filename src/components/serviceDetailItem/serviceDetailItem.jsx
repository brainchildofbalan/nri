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
}) => {
  return (
    <div className={`w-full relative flex flex-col`}>
      <div className={`w-full aspect-[419.9/70] relative`}>
        <Image
          src={`/images/banner/banner.jpg`}
          quality={99.8}
          priority
          fill
          alt={`banner`}
          className="object-cover object-[70%]"
        />
      </div>
      <div className={`w-full flex justify-between mt-[20px] items-center`}>
        <h2
          className={`w-auto flex flex-1 text-[36px] leading-[1.4] mb-0 font-medium`}
        >
          {category_name}
        </h2>
        <p>
          Estimated time for completion: <b>1 week</b>
        </p>
      </div>
      <div className={`w-full relative mt-[10px]`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className={`w-full relative flex mt-[40px]`}>
        <div className={`w-auto flex items-center`}>
          <p className={`pr-[10px]`}>Price</p>
          <p
            className={`mr-[20px] border border-[#ED781A] rounded-[3px] overflow-hidden h-[48px] px-[20px] flex items-center justify-center`}
          >
            ${price}
          </p>
          <Button
            text={`Buy now`}
            classNames={`!bg-[#ED781A]`}
            onclick={() => handleBuyNow({ category_name, price, category_id })}
          />
        </div>

        <div className={`w-auto flex ml-auto`}>
          <Link
            href={`/`}
            className={`mr-[20px] border bg-[#25D366] text-white rounded-[3px] overflow-hidden h-[48px] px-[20px] flex items-center justify-center`}
          >
            Whatsapp now
          </Link>
          <Button text={`Contact us`} as={`link`} href={`/`} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailItem;
