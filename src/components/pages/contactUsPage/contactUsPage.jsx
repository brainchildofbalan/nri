import Button from "@components/components/button";
import BreadCrumbs from "../../breadCrumbs";

const ContactUsPage = () => {
  return (
    <div className={`w-full min-h-[100vh]`}>
      <BreadCrumbs title={`contact us`} />
      <div className={`w-full relative py-[40px]`}>
        <div className={`container mx-auto px-[15px]`}>
          <div className={`relative flex flex-wrap`}>
            <div
              className={`w-full md:w-1/2 flex items-center justify-center flex-col`}
            >
              <div
                className={`w-auto flex flex-col items-center justify-center`}
              >
                <h3
                  className={`text-[28px] md:text-[30px] font-medium mb-[5px] text-center`}
                >
                  Send us a Message
                </h3>
                <p className={`text-center w-full max-w-[380px] mx-auto`}>
                  We value your feedback, questions, and inquiries. Please feel
                  free to get in touch with us
                </p>
                <div className={`w-auto flex invert mt-[30px]`}>
                  <ul className={`w-auto flex gap-[27px]`}>
                    <li>
                      <a href="tel:+917994298158">
                        <div className={`w-[22px] h-[22px] mr-[5px]`}>
                          <img
                            src="/images/header/facebook.svg"
                            className={`w-full h-full object-contain`}
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+917994298158">
                        <div className={`w-[22px] h-[22px] mr-[5px]`}>
                          <img
                            src="/images/header/instagram.svg"
                            className={`w-full h-full object-contain`}
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+917994298158">
                        <div className={`w-[22px] h-[22px] mr-[5px]`}>
                          <img
                            src="/images/header/linkedin.svg"
                            className={`w-full h-full object-contain`}
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`w-full relative border-t border-b hidden md:flex flex-wrap mt-[30px] max-w-[550px]`}
              >
                <div className={`w-1/3 flex flex-col items-center`}>
                  <a href="/" className={`flex py-[30px] flex-col`}>
                    <div
                      className={`w-[22px] h-[22px] invert mx-auto mb-[20px]`}
                    >
                      <img
                        src="/images/header/instagram.svg"
                        className={`w-full h-full object-contain`}
                        alt=""
                      />
                    </div>
                    <p>info@nrilife.com</p>
                  </a>
                </div>
                <div
                  className={`w-1/3 flex flex-col items-center border-r border-l`}
                >
                  <a href="/" className={`flex py-[30px] flex-col`}>
                    <div
                      className={`w-[22px] h-[22px] invert mx-auto mb-[20px]`}
                    >
                      <img
                        src="/images/header/instagram.svg"
                        className={`w-full h-full object-contain`}
                        alt=""
                      />
                    </div>
                    <p className={`text-center w-[90%] mx-auto`}>
                      Planet Tower , Thmaspuram Church Road ,Marad ,Kochi 682304
                    </p>
                  </a>
                </div>
                <div className={`w-1/3 flex flex-col items-center`}>
                  <div className={`flex py-[30px] flex-col`}>
                    <div
                      className={`w-[22px] h-[22px] invert mx-auto mb-[20px]`}
                    >
                      <img
                        src="/images/header/instagram.svg"
                        className={`w-full h-full object-contain`}
                        alt=""
                      />
                    </div>
                    <span>
                      {" "}
                      <a href="tel:+9645550072">+9645550072</a>,{" "}
                      <a href="tel:+9645550072">73</a>,{" "}
                      <a href="tel:+9645550072">74</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full md:w-1/2`}>
              <div className={`w-full relative flex`}>
                <div className={`w-full`}>
                  <p>
                    {" "}
                    If you prefer not to fill out the form, please use this{" "}
                    <a
                      href="mailto:info@nrilife.com"
                      className={`underline text-[#1501FF]`}
                    >
                      link
                    </a>
                  </p>
                  <div className={`w-full flex flex-wrap relative`}>
                    <div className={`w-full md:w-1/2 p-[10px]`}>
                      <input
                        type="text"
                        placeholder="Enter name"
                        className={`w-full border border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      />
                    </div>
                    <div className={`w-full md:w-1/2 p-[10px]`}>
                      <input
                        type="text"
                        placeholder="Enter number"
                        className={`w-full border border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      />
                    </div>
                    <div className={`w-full p-[10px]`}>
                      <input
                        type="text"
                        placeholder="Enter email"
                        className={`w-full border border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      />
                    </div>
                    <div className={`w-full p-[10px]`}>
                      <textarea
                        type="text"
                        placeholder="Enter message"
                        rows={4}
                        className={`w-full border border-[#C7C7C7] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000] resize-none`}
                      ></textarea>
                    </div>
                    <div className={`w-full p-[10px] flex justify-end`}>
                      <Button text={`Submit enquiry`} classNames={`!w-full`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
