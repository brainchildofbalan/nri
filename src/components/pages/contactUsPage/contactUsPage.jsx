"use client";
import Button from "@components/components/button";
import BreadCrumbs from "../../breadCrumbs";
import { ErrorMessage, Form, Formik } from "formik";
import { useContactUsPage } from "./useContactUsPage";

const ContactUsPage = () => {
  const { handleSubmitFrom, initialValues, validationSchema, success } =
    useContactUsPage();
  return (
    <div className={`w-full min-h-[100vh]`}>
      <BreadCrumbs title={`contact us`} />

      <div className="w-full py-[10px] bg-[#0C999F]">
        <div className="container mx-auto px-[15px]">
          <div className="w-full relative max-w-[700px] flex justify-center mx-auto">
            <div
              className={` text-[14px] sm:text-[16px] w-full relative text-white  p-[3px] flex flex-wrap text-center justify-center`}
            >
              <h4>Opening Hours</h4>
              <span className="px-[5px]">:</span>
              <span className="px-[5px]">Monday - Saturday</span>
              <span className="font-semibold px-[5px]">10am to 6pm</span>
              <span className="px-[10px]">|</span>
              <span className="font-bold">Sunday closed</span>
            </div>
          </div>
        </div>
      </div>

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
                      <a
                        href="https://www.facebook.com/profile.php?id=61552625924781"
                        target="_blank"
                      >
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
                      <a
                        href="https://www.youtube.com/@NRILifeChannel"
                        target="_blank"
                      >
                        <div className={`w-[24px] h-[24px] mr-[5px]`}>
                          <img
                            src="/images/header/youtube.svg"
                            className={`w-full h-full object-contain`}
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                    {/* <li>
                      <a href="tel:+917994298158">
                        <div className={`w-[22px] h-[22px] mr-[5px]`}>
                          <img
                            src="/images/header/linkedin.svg"
                            className={`w-full h-full object-contain`}
                            alt=""
                          />
                        </div>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div
                className={`w-full relative border-t border-b hidden md:flex flex-wrap mt-[30px] max-w-[550px]`}
              >
                <div className={`w-1/3 flex flex-col items-center`}>
                  <a href="/" className={`flex py-[30px] flex-col`}>
                    <div className={`w-[22px] h-[22px] mx-auto mb-[20px]`}>
                      <img
                        src="/images/icons/email.svg"
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
                    <div className={`w-[22px] h-[22px] mx-auto mb-[20px]`}>
                      <img
                        src="/images/icons/location.svg"
                        className={`w-full h-full object-contain`}
                        alt=""
                      />
                    </div>
                    <p className={`text-center w-[90%] mx-auto`}>
                      NRI's life, Planet Tower , Thomaspuram Church Road ,Marad
                      ,Kochi 682304
                    </p>
                  </a>
                </div>
                <div className={`w-1/3 flex flex-col items-center`}>
                  <div className={`flex py-[30px] flex-col`}>
                    <div className={`w-[22px] h-[22px] mx-auto mb-[20px]`}>
                      <img
                        src="/images/icons/call.svg"
                        className={`w-full h-full object-contain`}
                        alt=""
                      />
                    </div>
                    <span>
                      {" "}
                      <a href="tel:+919645550072">+919645550072</a>,{" "}
                      <a href="tel:+919645550073">73</a>,{" "}
                      <a href="tel:+919645550074">74</a>
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

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitFrom}
                  >
                    {({
                      values,
                      handleChange,
                      handleBlur,
                      touched,
                      errors,
                    }) => (
                      <Form className={`w-full flex flex-wrap relative`}>
                        <div className={`w-full md:w-1/2 p-[10px]`}>
                          <input
                            className={`w-full border border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            name="user_name"
                            value={values.user_name}
                            placeholder="Enter name"
                          />
                          <ErrorMessage
                            name="user_name"
                            component="div"
                            className="w-full text-red-600 text-[14px]"
                          />
                        </div>

                        <div className={`w-full md:w-1/2 p-[10px]`}>
                          <input
                            className={`w-full border border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            name="user_number"
                            value={values.user_number}
                            placeholder="Enter phone number"
                          />
                          <ErrorMessage
                            name="user_number"
                            component="div"
                            className="w-full text-red-600 text-[14px]"
                          />
                        </div>
                        <div className={`w-full p-[10px]`}>
                          <input
                            className={`w-full border border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            name="user_email"
                            value={values.user_email}
                            placeholder="Enter email address"
                          />
                          <ErrorMessage
                            name="user_email"
                            component="div"
                            className="w-full text-red-600 text-[14px]"
                          />
                        </div>
                        <div className={`w-full p-[10px]`}>
                          <textarea
                            className={`w-full border border-[#C7C7C7] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000] resize-none`}
                            placeholder="Enter message"
                            type="text"
                            rows={4}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="user_message"
                            value={values.user_message}
                          ></textarea>
                        </div>
                        <div className={`w-full p-[10px] flex justify-end`}>
                          <Button
                            type="submit"
                            text={`Submit enquiry`}
                            classNames={`!w-full`}
                          />
                        </div>
                      </Form>
                    )}
                  </Formik>
                  {success && (
                    <div className="p-[10px]">
                      <div
                        class="bg-teal-100 border-t-4 border-green-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                        role="alert"
                      >
                        <div class="flex">
                          <div class="py-1">
                            <svg
                              class="fill-current h-6 w-6 text-teal-500 mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p class="font-bold">Your message has been send!</p>
                            <p class="text-sm">
                              Our team will contact you soon.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
