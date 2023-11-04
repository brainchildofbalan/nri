import Link from "next/link";
import React from "react";
import Button from "../button/button";

const SideMenu = ({ sideMenuOpen, setSideMenuOpen }) => {

  const handleCloseClick = () => {
    setSideMenuOpen(prev => !prev)
  }
  return (
    <>
      {sideMenuOpen && (
        <div
          className={`gap-[20px] flex flex-col w-[90%] max-w-[350px] bg-white left-0 top-0 h-[100vh] p-[20px] z-[999] fixed`}
        >
          <ul
            className={`flex flex-col gap-[20px] [&>*]:after:w-[8px] [&>*]:after:h-[8px] [&>*]:after:border-r-[2px] [&>*]:after:border-b-[2px] [&>*]:after:border-[#000] [&>*]:after:-rotate-45 [&>*]:after:absolute [&>*]:after:right-0 [&>*]:after:bottom-0 [&>*]:after:top-0 [&>*]:after:m-auto`}
          >
            <li className={`relative flex`}>
              <Link href={`/`} onClick={handleCloseClick}>
                <span>Home</span>
              </Link>
            </li>
            <li className={`relative flex`}>
              <Link href={`/about-us`} onClick={handleCloseClick}>
                <span>About Us</span>
              </Link>
            </li>
            <li className={`relative flex`}>
              <Link href={`/services`} onClick={handleCloseClick}>
                <span>Services</span>
              </Link>
            </li>

            <li className={`relative flex`}>
              <Link href={`/contact-us`} onClick={handleCloseClick}>
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {sideMenuOpen && (
        <div
          onClick={() => setSideMenuOpen(false)}
          className={`w-[100vw] h-[100vh] fixed left-0 top-0 z-[998] bg-black opacity-30`}
        ></div>
      )}
    </>
  );
};

export default SideMenu;
