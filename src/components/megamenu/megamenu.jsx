import React from "react";
import MegamenuItem from "../megamenuItem/megamenuItem";

const Megamenu = ({ isOpen, setMenuOpen }) => {
  return (
    <div
      className={`w-full absolute top-[100%] z-40 transition-all duration-300 ${
        isOpen
          ? `opacity-100 pointer-events-auto`
          : `opacity-0 pointer-events-none`
      }`}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <div className={`container px-[15px] mx-auto relative `}>
        <div className={`w-full relative pt-[15px]`}>
          <div
            className={`bg-white py-[33px] px-[15px] w-full flex flex-wrap  shadow-md shadow-gray-100 border`}
          >
            <div className={`w-1/5 [&>*]:last:border-none`}>
              <MegamenuItem />
            </div>
            <div className={`w-1/5 [&>*]:last:border-none`}>
              <MegamenuItem />
            </div>
            <div className={`w-1/5 [&>*]:last:border-none`}>
              <MegamenuItem />
            </div>
            <div className={`w-1/5 [&>*]:last:border-none`}>
              <MegamenuItem />
            </div>
            <div className={`w-1/5 [&>*]:last:border-none`}>
              <MegamenuItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
