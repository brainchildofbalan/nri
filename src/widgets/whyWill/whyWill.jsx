import Button from "@components/components/button/button";
import Title from "@components/components/title/title";
import Image from "next/image";
import React from "react";

const WhyWill = () => {
  return (
    <section className={`w-full relative bg-[#054446] text-white`}>
      <div className={`container px-[15px] mx-auto relative  py-[50px]`}>
        <span
          className={`hidden lg:block w-[260px] h-full bg-white absolute left-[-4%] top-0`}
        >
          <Image
            fill
            src={`/images/why/why-bg.jpg`}
            className={`max-w-[90%] mx-auto`}
          />
        </span>
        <div className={`w-full flex flex-wrap relative z-30`}>
          <div className={`w-full lg:w-1/2`}>
            <div className={`w-full `}>
              <div className={`aspect-[609/392] relative bg-[#fafafa]`}>
                <Image fill src={`/images/why/why-image-1.jpg`} />
              </div>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 lg:pl-[55px] flex items-center`}>
            <div
              className={`w-full flex flex-col relative text-[18px] items-start mt-[30px] lg:mt-0`}
            >
              <div className={`mb-[10px]`}>
                <Title title={`Why not make a will?`} />
              </div>
              <p className={`mb-[15px] opacity-90 leading-[1.6]`}>
                Creating a will serves several important purposes and fulfills
                various needs, providing both you and your loved ones with peace
                of mind and legal clarity.
              </p>
              <ul
                className={`flex flex-wrap [&>*]:after:w-[4px] [&>*]:after:h-[4px] [&>*]:after:rounded-full [&>*]:after:bg-white [&>*]:relative [&>*]:ps-[17px] [&>*]:after:flex [&>*]:after:absolute [&>*]:after:left-0 [&>*]:after:top-[12px] text-[18px]`}
              >
                <li
                  className={`w-full sm:w-1/2 my-[5px] opacity-90 text-[16px]`}
                >
                  Asset Distribution
                </li>
                <li
                  className={`w-full sm:w-1/2 my-[5px] opacity-90 text-[16px]`}
                >
                  Guardianship of Minors
                </li>
                <li
                  className={`w-full sm:w-1/2 my-[5px] opacity-90 text-[16px]`}
                >
                  Avoiding Intestacy Laws
                </li>
                <li
                  className={`w-full sm:w-1/2 my-[5px] opacity-90 text-[16px]`}
                >
                  Reducing Family Disputes
                </li>
                <li
                  className={`w-full sm:w-1/2 my-[5px] opacity-90 text-[16px]`}
                >
                  Executor Appointment
                </li>
                <li
                  className={`w-full sm:w-1/2 my-[5px] opacity-90 text-[16px]`}
                >
                  Charitable Contributions
                </li>
              </ul>
              <div className={`w-auto mt-[20px]`}>
                <Button
                  as={`link`}
                  href={`/`}
                  text={`Purchase will`}
                  classNames={`!bg-[#ED781A]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWill;
