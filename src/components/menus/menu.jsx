import Link from "next/link";
import React from "react";
import Button from "../button/button";
import { useRecoilValue } from "recoil";
import { cartState } from "@components/hooks/state";

const Menu = ({ setMenuOpen }) => {
  const cartValues = useRecoilValue(cartState);

  return (
    <div
      className={`flex h-full text-black gap-[40px] items-center text-[20px]`}
    >
      <ul className={`flex gap-[33px] items-center `}>
        <li className={`h-[67px] flex items-center font-medium`}>
          <Link href={`/`}>
            <span>Home</span>
          </Link>
        </li>
        <li className={`h-[67px] flex items-center font-medium`}>
          <Link href={`/about-us`}>
            <span>About Us</span>
          </Link>
        </li>
        <li
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          className={`h-[67px] flex items-center font-medium`}
        >
          <button className={`flex items-center gap-[8px]`}>
            <span>Services</span>
            <span
              className={`h-0 w-0 border-x-4 border-x-transparent border-t-[5px] border-t-[#0eabb1]`}
            ></span>
          </button>
        </li>
        <li className={`h-[67px] flex items-center font-medium`}>
          <Link href={`/services`}>
            <span>Price and package</span>
          </Link>
        </li>
      </ul>
      <Link href={`/contact-us`}>
        <Button text={`Contact Us`} classNames={`text-[18px]`}>
          Contact Us
        </Button>
      </Link>
      <ul>
        <li className={`h-[67px] flex items-center font-medium`}>
          <Link href={`/cart`} className="flex gap-[8px]">
            <span>{`Cart${
              cartValues && cartValues.length > 0
                ? `(${cartValues.length})`
                : ""
            }`}</span>
            <span>
              <img src="/images/icons/cart-icon.svg" alt="cart icon" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
