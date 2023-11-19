import React from "react";

const HeaderTop = () => {
  return (
    <div
      className={`w-full bg-[#0C999F] h-[50px] flex items-center  text-[16] text-white`}
    >
      <div className={`container px-[15px] mx-auto flex items-center`}>
        <div className={`w-auto ml-auto mr-auto md:mr-0 flex items-center`}>
          <div className={`w-[18px] h-[18px] mr-[10px]`}>
            <img
              src="/images/header/headset.svg"
              alt=""
              className={`w-full h-auto`}
            />
          </div>
          <div
            className={`w-auto flex items-center text-[15px] md:text-[18px]`}
          >
            <a href="tel:+919645550072">+919645550072</a>,
            <a href="tel:+919645550073">73</a>,<a href="tel:+919645550074">74</a>
            <span className={`w-[1px] inline-block ml-[8px] mr-[12px]`}>|</span>
            <a href="mailto:info@nrilife.com">info@nrilife.com</a>
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
