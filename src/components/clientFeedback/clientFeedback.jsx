import Image from "next/image";
import React from "react";

const ClientFeedback = () => {
  return (
    <div>
      <div className={`w-full flex gap-[5px]`}>
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
        <Image
          src={`/images/happy-customers/star.svg`}
          width={23.73}
          height={23.73}
        />
      </div>
      <div className={`w-full mt-[20px]`}>
        <p>
          With a deep understanding of the intricacies involved in cross-border
          living, our mission is to illuminate the path, ensuring that every
          step you take is effortless and free from all the hassle.
        </p>
      </div>
      <div className={`w-full mt-[20px]`}>
        <div
          className={`w-[40px] h-[40px]  mb-[10px] rounded-full bg-[#065056] text-white flex justify-center items-center`}
        >
          A
        </div>
        <h6 className={`text-[16px] text-black font-medium`}>Name userName</h6>
        <p className={`text-[16px] text-[#A1A1A1]`}>Company</p>
      </div>
    </div>
  );
};

export default ClientFeedback;
