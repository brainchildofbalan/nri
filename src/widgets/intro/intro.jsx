import Button from "@components/components/button/button";
import React from "react";

const Intro = () => {
  return (
    <div className={`w-full relative pt-[50px]`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`flex justify-center flex-col items-center`}>
          <h1 className={`text-[24px] md:text-[30px] leading-none mb-[15px]`}>
            Why NRI life ?
          </h1>
          <p className={`max-w-[540px] mx-auto text-center mb-[20px]`}>
            With a deep understanding of the intricacies involved in
            cross-border living, our mission is to illuminate the path, ensuring
            that every step you take is effortless and free from all the hassle.
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
              classNames={`!bg-[#000000] !w-full`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
