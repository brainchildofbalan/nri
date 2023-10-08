import Image from "next/image";
import React from "react";

const AboutIntro = () => {
  return (
    <div className={`w-full pt-[40px] pb-[40px]`}>
      <div className={`container mx-auto px-[15px]`}>
        <div
          className={`w-full relative flex flex-wrap flex-col-reverse lg:flex-row gap-y-[20px] lg:gap-y-0`}
        >
          <div className={`w-full lg:w-1/2`}>
            <div className={`w-full`}>
              <div
                className={`w-full max-w-[545px] 2xl:max-w-[655px] relative aspect-[545/363]`}
              >
                <Image
                  src={"/images/about-us/into.jpg"}
                  alt="about banner"
                  className={`object-cover`}
                  fill
                />
              </div>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 flex flex-col justify-center`}>
            <div className={`w-full relative max-w-[510px]`}>
              <h3 className={`text-[28px] md:text-[32px] font-medium mb-[5px]`}>
                About NRI’s life
              </h3>
              <h4
                className={`text-[18px] md:text-[20px] font-medium mb-[10px]`}
              >
                Trusted partner for a wide range of NRI services. We understand
                the unique needs and challenges faced by Non-Resident Indians
              </h4>
              <p>
                We are a team of dedicated professionals with years of
                experience in assisting NRIs in various aspects of their
                financial, legal, and personal affairs in India. Our expertise
                and commitment to excellence have established us as a trusted
                authority in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
