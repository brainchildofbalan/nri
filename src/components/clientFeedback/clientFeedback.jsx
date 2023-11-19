import Image from "next/image";
import React from "react";

const ClientFeedback = ({ shortWord, description, name, flag, services }) => {
  return (
    <div>
      <div className={`w-full flex gap-[5px]`}>
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
      </div>
      <div className={`w-full mt-[20px]`}>
        <ul
          className={`w-full relative flex flex-wrap gap-[10px] mb-[15px] empty:hidden`}
        >
          {services &&
            services.map((item) => {
              return (
                <li>
                  <p
                    className={`w-max relative px-[15px] py-[2px] bg-gray-50 rounded-full border`}
                  >
                    {item}
                  </p>
                </li>
              );
            })}
        </ul>
        <h4 className={`w-full text-[20px] mb-[7px] font-medium`}>
          {shortWord || `Excellent experience.`}
        </h4>
        <p>{description}</p>
      </div>
      <div className={`w-full mt-[20px]`}>
        {/* <div
          className={`w-[30px] h-[30px]  mb-[10px] rounded-full bg-[#054446] text-white flex justify-center items-center text-[13px]`}
        >
          P
        </div> */}
        <h6 className={`text-[16px] text-black font-medium flex items-center`}>
          <span>{name}</span>
          <span className={`ml-[10px]`}>
            {flag}
            {/* <Image
              src={`/images/happy-customers/flg.png`}
              width={23.73}
              height={23.73}
            /> */}
          </span>
        </h6>
        {/* <p className={`text-[16px] text-[#A1A1A1]`}>Company</p> */}
      </div>
    </div>
  );
};

export default ClientFeedback;
