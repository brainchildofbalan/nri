import React from "react";

const Title = ({ title, ...rest }) => {
  return (
    <h3
      className={`text-[24px] xl:text-[24px] font-medium 2xl:text-[30px] leading-[1.6] mb-0`}
      {...rest}
    >
      {title}
    </h3>
  );
};

export default Title;
