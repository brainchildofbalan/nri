import Title from "@components/components/title";

const WhyAbout = () => {
  return (
    <div className={`w-full bg-[#054446] py-[60px] text-white`}>
      <div className={`container mx-auto px-[15px]`}>
        <div className={`text-center`}>
          <Title title={`What sets us apart`} />
        </div>
        <div className={`flex w-full mt-[50px]`}>
          <div
            className={`w-auto gap-y-[20px] lg:gap-y-0 flex flex-wrap mx-[-15px]`}
          >
            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[8px]`}>
                  Expertise
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  Our team, including legal advisors, financial planners, and
                  real estate professionals, excels in NRI matters, offering
                  updated advice and solutions.
                </p>
              </div>
            </div>
            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[8px]`}>
                  Customer-Centric
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  Your satisfaction is our top priority. We take the time to
                  understand your unique needs and work tirelessly to meet and
                  exceed your expectations.
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[8px]`}>
                  Transparency
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  We believe in transparency in all our dealings. You can trust
                  us to provide clear and honest information and guidance
                  throughout our partnership.
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[8px]`}>
                  Technology
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  We leverage the latest technology to offer efficient and
                  convenient services. Our online platforms make it easy for you
                  to access information and stay updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAbout;
