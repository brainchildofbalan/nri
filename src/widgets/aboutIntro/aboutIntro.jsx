import Image from "next/image";
import React from "react";

const AboutIntro = () => {
  return (
    <div className={`w-full pt-[40px] pb-[40px]`}>
      <div className={`container mx-auto px-[15px]`}>
        <div
          className={`w-full relative flex flex-wrap flex-col-reverse lg:flex-row gap-y-[20px] lg:gap-y-0`}
        >
          <div className={`w-full lg:w-1/2 lg:pr-[30px]`}>
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
                Living your life abroad often comes with challenges more than comfort. For the NRIs, you are sure to run into troubles, big and small, from managing your assets in India, resolving legal disputes, or even updating your Aadhar card. You understand how time-consuming, difficult, and complicated it is to get things done back home. But not anymore. Meet NRI Life - your one-stop solution to all your NRI needs.
              </h4>
              <p>
                NRI Life is not just a trusted service platform; we are the bridge connecting NRIs with services and expertise back home. With a team of professionals, with years of expertise in their fields, we are here to help you with your legal, financial and personal affairs. Be it as simple as updating your Voter’s ID, to obtaining something valuable such as a Succession Certificate. With NRI Life, you can sit back and relax, while we get the work done for you in the most efficient manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
