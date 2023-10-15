"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button/button";
import { userServiceCard } from "./userServiceCard";

const ServiceCard = ({
  category_name,
  content,
  price,
  url,
  category_id,
  isBgGrey,
  image
}) => {
  if (image) {
    console.log(`${process.env.NEXT_PUBLIC_APP_URL}uploads/${image[0]?.filename}`, category_name);

  }
  const { handleAddCart } = userServiceCard();
  return (
    <div className={`w-full relative flex flex-col h-full`}>
      <Link
        href={`/services/${url}`}
        className={`w-full aspect-[780/250] relative`}
      >
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

      </Link>
      <div
        className={`w-full relative ${!isBgGrey ? `border` : `bg-[#F5F5F5] bg-opacity-50 border-b`
          } border-t-0 px-[20px] py-[11px] flex-1 flex flex-col`}
      >
        <Link href={`/services/${url}`} className={`w-full`}>
          <h3 className={`text-[20px] mb-[5px] font-semibold text-[#0C999F]`}>
            {category_name}
          </h3>
          {content && (
            <div
              className={`mb-[5px] text-[16px] leading-[1.4] line-clamp-3`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </Link>

        <div className={`w-full flex flex-col justify-center mt-auto`}>
          <h4 className={`text-[25px] mb-[5px] font-semibold`}>₹{price}</h4>
          <div className={`w-full flex justify-between items-center`}>
            <Link
              href={`/services/${url}`}
              className={`mb-0 text-[16px] font-medium`}
            >
              Learn more
            </Link>
            <Button
              text={`Add to cart`}
              classNames={`!bg-[#ED781A] md:!px-[10px] md:!py-[8px]`}
              onclick={() =>
                handleAddCart({ category_name, price, category_id })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
