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
}) => {
  const { handleAddCart } = userServiceCard();
  return (
    <div className={`w-full relative flex flex-col h-full`}>
      <Link
        href={`/services/${url}`}
        className={`w-full aspect-[419.9/70] relative`}
      >
        <Image
          src={`/images/banner/banner.jpg`}
          quality={99.8}
          priority
          fill
          alt={`banner`}
          className="object-cover object-[70%]"
        />
      </Link>
      <div
        className={`w-full relative ${
          !isBgGrey ? `border` : `bg-[#F5F5F5] bg-opacity-50 border-b`
        } border-t-0 p-[20px] flex-1 flex flex-col`}
      >
        <Link href={`/services/${url}`} className={`w-full`}>
          <h3 className={`text-[20px] mb-[10px] font-semibold`}>
            {category_name}
          </h3>
          {content && (
            <div
              className={`mb-[15px] text-[16px] leading-[1.4] line-clamp-3`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </Link>

        <div className={`w-full flex flex-col justify-center mt-auto`}>
          <h4 className={`text-[20px] mb-[10px] font-semibold`}>₹{price}</h4>
          <div className={`w-full flex justify-between items-center`}>
            <Link
              href={`/services/${url}`}
              className={`mb-0 text-[16px] font-medium`}
            >
              Learn more
            </Link>
            <Button
              text={`Add to cart`}
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
