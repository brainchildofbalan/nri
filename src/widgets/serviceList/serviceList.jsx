"use client";
import SimpleService from "@components/components/simpleService/simpleService";
import Link from "next/link";
import React from "react";
import { useServiceList } from "./useServiceList";

const ServiceList = ({ categorized }) => {
  const {
    openServiceList,
    setOpenServiceList,
    handleChangeList,
    activeList,
    activeId,
  } = useServiceList({
    categorized,
  });
  return (
    <>
      {openServiceList && (
        <div
          className={`w-[100vw] h-[100vh] fixed left-0 top-0 z-20 bg-black opacity-30`}
        ></div>
      )}
      <section
        className={`w-full flex justify-center relative z-40 mt-[-28px]`}
      >
        <div
          className={`container px-[15px]`}
          onMouseLeave={() => setOpenServiceList(false)}
        >
          <div className={`w-full`}>
            <div
              className={`w-max max-w-full mx-auto flex justify-center relative`}
            >
              <div className={` flex overflow-x-auto mx-auto relative`}>
                <div className={`w-auto relative mx-auto`}>
                  <ul className={`bg-[#0eabb1] bg-opacity-80 flex `}>
                    {categorized &&
                      categorized.map((item, index) => {
                        return (
                          <li key={index}>
                            <SimpleService
                              active={activeId === item.category_id}
                              title={item.category_name}
                              onMouseEnter={() => {
                                handleChangeList(item.category_id);
                              }}
                            />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              {openServiceList && (
                <div className={`w-full absolute top-[100%] bg-white p-[25px]`}>
                  <ul className={`w-full flex flex-wrap`}>
                    {activeList.length !== 0 ? (
                      activeList.map((item, index) => {
                        return (
                          <li className={`m-[3px] md:m-[6px]`} key={index}>
                            <Link
                              href={`/services/${item.url}`}
                              className={`text-[18px] border border-[#000] px-[17px] md:px-[24px] text-[14px] py-[8px] whitespace-pre rounded-[4px] flex hover:bg-[#09757A] hover:border-[#09757A] hover:text-white transition-all duration-300 `}
                            >
                              {item.category_name}
                            </Link>
                          </li>
                        );
                      })
                    ) : (
                      <li className={`text-center w-full`}>
                        Oops! no service under this category
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
