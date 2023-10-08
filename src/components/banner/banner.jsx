import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className={`w-full aspect-[16/9] md:aspect-[1727/351] relative mt-[107px]`}
    >
      <Image
        src={`/images/banner/banner-2.jpg`}
        quality={100}
        fill
        alt={`banner`}
        className="object-cover object-[70%]"
      />
      <span
        className={`bg-gradient-to-t from-white absolute w-full h-[40%] z-10 bottom-0 left-0`}
      ></span>
    </div>
  );
};

export default Banner;
