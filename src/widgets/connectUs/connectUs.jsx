import Button from "@components/components/button/button";
import Title from "@components/components/title/title";
import React from "react";

const ConnectUs = () => {
  return (
    <section className={`w-full relative mb-[50px]`}>
      <div className={`container px-[15px] mx-auto`}>
        <div className={`w-full p-[15px] md:p-[35px] bg-[#F5F5F5]`}>
          <div className={`w-full max-w-[712.7px] mx-auto`}>
            <div
              className={`w-full flex justify-center mb-[15px] md:mb-[20px]`}
            >
              <Title title={`Touch with us`} />
            </div>

            <div className={`w-full flex flex-wrap relative`}>
              <div className={`w-full md:w-1/2 p-[10px]`}>
                <input
                  type="text"
                  placeholder="Enter name"
                  className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                />
              </div>
              <div className={`w-full md:w-1/2 p-[10px]`}>
                <input
                  type="text"
                  placeholder="Enter number"
                  className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                />
              </div>
              <div className={`w-full p-[10px]`}>
                <input
                  type="text"
                  placeholder="Enter email"
                  className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                />
              </div>
              <div className={`w-full p-[10px]`}>
                <textarea
                  type="text"
                  placeholder="Enter message"
                  rows={4}
                  className={`w-full border-b border-[#C7C7C7] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000] resize-none`}
                ></textarea>
              </div>
              <div className={`w-full p-[10px] flex justify-end`}>
                <Button
                  text={`Submit enquiry`}
                  classNames={`!w-full md:!w-auto`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectUs;
