import React from "react";
import Button from "../button";
import Link from "next/link";

const BreadCrumbs = ({ title, price, category_id, handleBuyNow, category_postage }) => {
  return (
    <section
      className={`w-full relative min-h-[40px] md:min-h-[60px] mt-[118px] bg-[#F5F5F5] flex items-center border-b`}
    >
      <div className={`container mx-auto px-[15px]`}>
        <div className={`w-full relative flex flex-wrap`}>
          <div className={`w-auto flex items-center`}>
            <Link
              href={`/`}
              className="text-[18px] hover:opacity-100 opacity-40 transition-all duration-300"
            >
              Home
            </Link>{" "}
            <span className={`flex mx-[4px]`}>/</span>
            <p className={`w-full text-[18px] font-medium relative`}>
              {title || ""}
            </p>
          </div>
          <div className={`w-full  flex-1 hidden md:flex`}>
            <div className={`w-auto flex ml-auto items-center`}>
              {price && (
                <>
                  <p
                    className={`mr-[8px] border border-[#ED781A] rounded-[3px] overflow-hidden h-[40px] md:h-[48px] px-[20px] flex items-center justify-center font-bold text-[20px]  flex-col leading-none`}
                  >
                    <span>₹{price || ""}</span>
                    <span
                      className={`text-[11px] mt-[2px] opacity-60 font-normal whitespace-pre`}
                    >
                      Plus GST
                    </span>
                  </p>
                  <Button
                    text={`Buy now`}
                    classNames={`!bg-[#ED781A]`}
                    onclick={() =>
                      handleBuyNow({ category_name: title, price, category_id, category_postage })
                    }
                  />
                </>
              )}

              {/* <div className={`pl-[50px]`}>
                <Link href={`/`} className={`flex items-center`}>
                  <span className={`inline-block mr-[10px]`}>
                    Next Services
                  </span>
                  <div
                    className={`w-[37px] h-[37px] rounded-full bg-[#ED781A] flex justify-center items-center`}
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.46967 11.5303C0.176777 11.2374 0.176777 10.7626 0.46967 10.4697L4.93934 6L0.469669 1.53033C0.176776 1.23744 0.176776 0.762563 0.469669 0.469669C0.762563 0.176776 1.23744 0.176776 1.53033 0.469669L7.06066 6L1.53033 11.5303C1.23744 11.8232 0.762563 11.8232 0.46967 11.5303Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
