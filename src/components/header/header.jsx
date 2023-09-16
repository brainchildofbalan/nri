"use client";
import Link from "next/link";
import React from "react";
import Menu from "../menus";
import HeaderTop from "../headerTop";
import Megamenu from "../megamenu/megamenu";
import { useHeader } from "./useHeader";
import SideMenu from "../sideMenu/sideMenu";

const Header = () => {
  const { menuOpen, setMenuOpen, setSideMenuOpen, sideMenuOpen } = useHeader();
  return (
    <>
      <header className={`bg-white fixed w-full left-0 top-0 z-50`}>
        <div className={`w-full`}>
          <HeaderTop />
        </div>
        <div
          className={`container px-[15px] mx-auto h-[67px] flex items-center`}
        >
          <div className={`w-full relative flex items-center`}>
            <div className={`w-auto`}>
              <Link href={`/`}>
                <img src="/images/header/logo.svg" alt="" />
              </Link>
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

        <Megamenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <SideMenu setSideMenuOpen={setSideMenuOpen} sideMenuOpen={sideMenuOpen} />
    </>
  );
};

export default Header;
