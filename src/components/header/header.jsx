"use client";
import Link from "next/link";
import React from "react";
import Menu from "../menus";
import HeaderTop from "../headerTop";
import Megamenu from "../megamenu/megamenu";
import { useHeader } from "./useHeader";
import SideMenu from "../sideMenu/sideMenu";
import Image from "next/image";

const Header = () => {
  const { menuOpen, setMenuOpen, setSideMenuOpen, sideMenuOpen, isHeaderHide } =
    useHeader();
  return (
    <>
      <header
        className={`bg-white fixed w-full left-0 top-0 z-50 border-b shadow-sm ${
          isHeaderHide ? `translate-y-[-50px]` : `translate-y-[0px]`
        } transition-transform duration-300`}
      >
        <div className={`w-full`}>
          <HeaderTop />
        </div>
        <div
          className={`container px-[15px] mx-auto h-[67px] flex items-center`}
        >
          <div className={`w-full relative flex items-center`}>
            <div className={`w-auto`}>
              {/* <Link href={`/`}>
                <Image
                  src="/images/header/logo.svg"
                  alt="nri's life logo"
                  priority
                  width={`150`}
                  height={`38`}
                />
              </Link> */}
            </div>

            <div className={`w-auto ml-auto hidden lg:flex`}>
              <Menu setMenuOpen={setMenuOpen} />
            </div>

            <div
              className={`w-auto ml-auto lg:hidden flex flex-col`}
              onClick={() => setSideMenuOpen(true)}
            >
              <span
                className={`w-[25px] h-[2px] flex my-[3px] bg-black`}
              ></span>
              <span
                className={`w-[25px] h-[2px] flex my-[3px] bg-black`}
              ></span>
              <span
                className={`w-[25px] h-[2px] flex my-[3px] bg-black`}
              ></span>
            </div>
          </div>
        </div>
        <div
          className={`w-full absolute left-0 bottom-0 h-full flex items-center pointer-events-none`}
        >
          <div className="relative container  mx-auto px-[15px] h-full before:absolute before:bg-white before:w-full before:left-[-90%] before:h-full">
            <div
              className={`w-[280px]  h-full bg-white flex items-end z-10 relative`}
            >
              <div
                className={`w-full ${
                  isHeaderHide ? `h-[67px] w-[150px]` : `h-full w-[230px]`
                } transition-all duration-300 ease-in-out flex justify-end`}
              >
                <Link
                  href={`/`}
                  className={`w-full pointer-events-auto flex relative aspect-[220/56]`}
                >
                  <Image
                    src="/images/header/logo.svg"
                    alt="nri's life logo"
                    priority
                    fill
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Megamenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <SideMenu setSideMenuOpen={setSideMenuOpen} sideMenuOpen={sideMenuOpen} />
    </>
  );
};

export default Header;
