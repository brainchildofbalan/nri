import React from "react";

const SimpleService = ({ active, title, ...props }) => {
  return (
    <button
      className={`rounded-[4px] overflow-hidden text-[17px] text-white h-[56px] px-[21px] flex justify-center items-center ${
        active ? `bg-[#09757A]` : ""
      }`}
      {...props}
    >
      <span className={`whitespace-pre`}>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`rotate-90`}
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
            fill={`white`}
          />
        </g>
      </svg>
    </button>
  );
};

export default SimpleService;
