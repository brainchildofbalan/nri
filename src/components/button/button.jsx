import Link from "next/link";
import React from "react";

const Button = ({
  type = `button`,
  icon,
  text,
  onclick,
  as,
  href,
  classNames,
  isIconLight = false,
}) => {
  return as === `link` ? (
    <Link
      href={`${href || `/`}`}
      className={`w-auto flex items-center justify-center border-none bg-[#09757A] text-white leading-none px-[12px] py-[8px] md:px-[18px] md:py-[12px] rounded-sm ${classNames} group whitespace-pre`}
    >
      {text}
      {icon && <span>{icon}</span>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`ml-[6px] group-hover:translate-x-1 relative transition-all`}
      >
        <mask
          id="mask0_699_92"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_699_92)">
          <path
            d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
            fill={isIconLight ? `black` : `white`}
          />
        </g>
      </svg>
    </Link>
  ) : (
    <button
      type={type}
      onClick={onclick}
      className={`w-auto flex items-center justify-center border-none bg-[#09757A] text-white leading-none px-[12px] py-[8px] md:px-[18px] md:py-[12px] rounded-sm ${classNames} group  whitespace-pre`}
    >
      {text}
      {icon && <span>{icon}</span>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`ml-[6px] group-hover:translate-x-1 relative transition-all`}
      >
        <mask
          id="mask0_699_92"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_699_92)">
          <path
            d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
            fill={isIconLight ? `black` : `white`}
          />
        </g>
      </svg>
    </button>
  );
};

export default Button;
