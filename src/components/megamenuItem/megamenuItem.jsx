import Link from "next/link";
import React from "react";

const MegamenuItem = ({ category_name, category_data, setMenuOpen }) => {
  return (
    <div className={`w-full relative text-black px-[20px] border-r h-full`}>
      <h3 className={`text-[18px] font-medium`}>{category_name}</h3>
      <ul className="[&>*]:after:w-[3px] [&>*]:after:h-[3px] [&>*]:after:rounded-full [&>*]:after:bg-black [&>*]:relative [&>*]:ps-[17px] [&>*]:after:flex [&>*]:after:absolute [&>*]:after:left-0 [&>*]:after:top-[10px] text-[17px]">
        {category_data?.map((item, index) => {
          return (
            <li
              className={`my-[8px]`}
              key={index}
              onClick={() => setMenuOpen(false)}
            >
              <Link href={`/services/${item.url}`}>{item.category_name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MegamenuItem;
