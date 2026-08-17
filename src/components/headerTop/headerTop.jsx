import React from "react";

const HeaderTop = () => {
  return (
    <div
      className={`w-full bg-gradient-to-r from-[#025B87] to-[#07C6BA] h-[50px] flex items-center  text-[16] text-white`}
    >
      <div className={`container px-[15px] mx-auto flex items-center`}>
        <div className={`w-auto ml-auto mr-auto md:mr-0 flex items-center`}>
          <div className={`w-[18px] h-[18px] mr-[8px] md:mr-[10px] shrink-0`}>
            <img
              src="/images/header/headset.svg"
              alt=""
              className={`w-full h-auto`}
            />
          </div>
          <div
            className={`w-auto flex items-center whitespace-nowrap text-[13px] sm:text-[15px] md:text-[18px]`}
          >
            <span className={`flex items-center`}>
              <span className={`mr-[5px] opacity-80`}>IN</span>
              <a href="tel:+919645550072">+919645550072</a>
              <span className={`hidden sm:inline`}>
                ,<a href="tel:+919645550073">73</a>
              </span>
            </span>
            <span className={`inline-block mx-[8px] md:mx-[12px] opacity-60`}>
              |
            </span>
            <span className={`flex items-center`}>
              <span className={`mr-[5px] opacity-80`}>UK</span>
              <a href="tel:+447407165000">+447407165000</a>
            </span>
            <span
              className={`hidden sm:inline-block mx-[8px] md:mx-[12px] opacity-60`}
            >
              |
            </span>
            <a
              href="mailto:support@nrilife.com"
              className={`hidden sm:inline-block`}
            >
              support@nrilife.com
            </a>
          </div>
        </div>
        <span
          className={`w-[33px] h-[1px] bg-white relative mx-[38px] hidden md:flex`}
        ></span>
        <div className={`w-auto  hidden md:flex`}>
          <ul className={`w-auto flex gap-[20px]`}>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61552625924781" target="_blank">
                <div className={`w-[18px] h-[18px] mr-[5px] hover:opacity-75 transition-opacity duration-300`}>
                  <img src="/images/header/facebook.svg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@NRILifeChannel" target="_blank">
                <div className={`w-[19px] h-[19px] mr-[5px] hover:opacity-75 transition-opacity duration-300`}>
                  <img src="/images/header/youtube.svg" alt="" />
                </div>
              </a>
            </li>
            {/* <li>
              <a href="tel:+917994298158">
                <div className={`w-[18px] h-[18px] mr-[5px]`}>
                  <img src="/images/header/linkedin.svg" alt="" />
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
