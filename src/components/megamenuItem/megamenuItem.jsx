import Link from "next/link";
import React from "react";

const MegamenuItem = () => {
  return (
    <div className={`w-full relative text-black px-[20px] border-r`}>
      <h3 className={`text-[18px] font-medium`}>Will/Legal</h3>
      <ul className="[&>*]:after:w-[3px] [&>*]:after:h-[3px] [&>*]:after:rounded-full [&>*]:after:bg-black [&>*]:relative [&>*]:ps-[17px] [&>*]:after:flex [&>*]:after:absolute [&>*]:after:left-0 [&>*]:after:top-[10px] text-[17px]">
        <li className={`my-[8px]`}>
          <Link href={`/`}>Will</Link>
        </li>
        <li className={`my-[8px]`}>
          <Link href={`/`}>Affidavit</Link>
        </li>
        <li className={`my-[8px]`}>
          <Link href={`/`}>Power of attorney</Link>
        </li>
        <li className={`my-[8px]`}>
          <Link href={`/`}>Succession Certificate</Link>
        </li>
        <li className={`my-[8px]`}>
          <Link href={`/`}>Translation</Link>
        </li>
        <li className={`my-[8px]`}>
          <Link href={`/`}>Document Verification</Link>
        </li>
      </ul>
    </div>
  );
};

export default MegamenuItem;
