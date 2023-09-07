"use client";
import Link from "next/link";
import React from "react";
import Menu from "../menus";
import HeaderTop from "../headerTop";
import Megamenu from "../megamenu/megamenu";
import { useHeader } from "./useHeader";

const Header = () => {
  const { menuOpen, setMenuOpen } = useHeader();
  return (
    <header className={`bg-white fixed w-full left-0 top-0 z-50`}>
      <div className={`w-full`}>
        <HeaderTop />
      </div>
      <div className={`container px-[15px] mx-auto h-[67px] flex items-center`}>
        <div className={`w-full relative flex items-center`}>
          <div className={`w-auto`}>
            <Link href={`/`}>
              <img src="images/header/logo.svg" alt="" />
            </Link>
          </div>

          <div className={`w-auto ml-auto hidden lg:flex`}>
            <Menu setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>

      <Megamenu isOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
