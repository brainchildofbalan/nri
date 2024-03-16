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
                <h3 className={`w-full text-[20px] text-white mb-[3px]`}>
                  Expertise
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  Our team of professionals includes financial advisors, legal practitioners and real estate advisors. Every member of the team is well-informed and updated and specializes in handling NRI matters.
                </p>
              </div>
            </div>
            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[3px]`}>
                  Client-Driven
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  Your satisfaction comes first at NRI Life. All our solutions and advice will be tailor-made to your uniq ue requirements, and we’ll put in the time and effort so that you don’t have to.
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[3px]`}>
                  Transparency
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  While our clients put their trust in us to get things done, we return the same by being transparent in all our proceedings. Honest information, clearly communicated with unbiased guidance, and you have our assurance on that.
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/4 px-[15px]`}>
              <div className={`w-full flex flex-col text-white`}>
                <h3 className={`w-full text-[20px] text-white mb-[3px]`}>
                  Technology
                </h3>
                <p
                  className={`w-full text-[18px] text-white opacity-80 font-light`}
                >
                  For your convenience, our online platform makes it simple and easy for you to stay updated constantly, and access information real-time, from the comfort of your homes. Fill out the easy form on our website, send us an email, or give us a call, and our team will get in touch with you immediately.
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
