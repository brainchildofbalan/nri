import useFetch from "@components/hooks/useFetch";
import Link from "next/link";
import React from "react";

const Footer = async () => {
  const options = { cache: "no-store" };
  const data = await useFetch(`/services-categories`, options);
  return (
    <footer className="bg-[#054446]  text-white pt-[30px] border-t-4 border-[#03282A] ">
      <div className={`container px-[15px] mx-auto  pb-[50px]`}>
        <div className={`w-full flex flex-col justify-center items-center`}>
          <div className={`w-auto flex flex-col mb-[20px]`}>
            <h4 className={`text-[30px] mb-[3px] text-center`}>NRI'SLife</h4>
            <p className={`mb-0 text-center`}>Service and support for NRI’s</p>
          </div>

          <div className={`w-auto flex flex-wrap`}>
            <ul
              className={`flex flex-wrap justify-center w-full max-w-[900px]`}
            >
              {data &&
                data?.total?.map((item) => {
                  return (
                    <li className={`m-[3px] md:m-[6px]`}>
                      <Link
                        href={`/services/${item?.url}`}
                        className={`border px-[17px] md:px-[24px] text-[14px] md:text-[18px] py-[8px] whitespace-pre rounded-[4px] flex hover:bg-white hover:text-black transition-all duration-300 `}
                      >
                        {item?.category_name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`py-[15px] w-full min-h-[55px] flex items-center bg-[#03282A] text-white overflow-hidden`}
      >
        <div
          className={`container px-[15px] mx-auto flex flex-col-reverse lg:flex-row`}
        >
          <div
            className={`w-full lg:w-auto lg:mr-auto relative flex justify-between`}
          >
            <p
              className={`w-full text-center lg:text-left mt-[15px] lg:mt-0 text-[14px]`}
            >
              Copyright@2023 NRILife
            </p>
          </div>
          <div className={`w-auto`}>
            <ul className="flex gap-x-[20px] lg:gap-x-[33px] gap-y-[10px] text-[14px   flex-wrap justify-center">
              <li>
                <Link
                  href={`/disclaimer`}
                  className={`whitespace-pre text-[14px`}
                >
                  Disclaimer{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={`/terms-of-services`}
                  className={`whitespace-pre text-[14px`}
                >
                  Terms of services{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={`/privacy-policy`}
                  className={`whitespace-pre text-[14px`}
                >
                  Privacy policy{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={`/refund-policy`}
                  className={`whitespace-pre text-[14px`}
                >
                  Refund policy{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
