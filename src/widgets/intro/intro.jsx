import Button from "@components/components/button/button";
import React from "react";

const Intro = () => {
  return (
    <div className={`w-full relative pt-[30px]`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`flex justify-center flex-col items-center`}>
          <h1 className={`text-[24px] md:text-[30px] leading-none mb-[15px]`}>
            Why NRI life ?
          </h1>
          <p className={`max-w-[640px] mx-auto text-center mb-[20px]`}>
            Do you have paperwork to finish back home? Is bureaucracy becoming a too complicated for you to handle from miles away? We’ll take the hassle of getting things done for you, efficiently, and effortlessly, while you can relax abroad.

          </p>
          <div
            className={`w-full md:w-auto flex flex-col md:flex-row gap-[10px]`}
          >
            <Button
              as={`link`}
              href={`/services`}
              text={`View all services`}
              classNames={`!w-full`}
            />
            <Button
              as={`link`}
              href={`/about-us`}
              text={`Learn more`}
              classNames={`!bg-[#ED781A] !w-full`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
