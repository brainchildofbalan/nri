"use client"
import Button from "@components/components/button/button";
import { useContactUsPage } from "@components/components/pages/contactUsPage/useContactUsPage";
import Title from "@components/components/title/title";
import { ErrorMessage, Form, Formik } from "formik";
import React from "react";

const ConnectUs = () => {
  const { handleSubmitFrom, initialValues, validationSchema, success } =
    useContactUsPage();
  return (
    <section className={`w-full relative mb-[50px]`}>
      <div className={`container px-[15px] mx-auto`}>
        <div
          className={`w-max max-w-full mx-auto p-[15px] md:p-[20px] rounded-[10px] overflow-hidden bg-[#F5F5F5]`}
        >
          <div className={`w-full max-w-[712.7px] mx-auto`}>
            <div
              className={`w-full flex justify-center mb-[15px] md:mb-[20px]`}
            >
              <Title title={`Touch with us`} />
            </div>

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
                      placeholder="Enter name"
                      className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="user_name"
                      value={values.user_name}
                    />
                    <ErrorMessage
                      name="user_name"
                      component="div"
                      className="w-full text-red-600 text-[14px]"
                    />
                  </div>
                  <div className={`w-full md:w-1/2 p-[10px]`}>
                    <input
                      type="text"
                      placeholder="Enter number"
                      className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="user_number"
                      value={values.user_number}
                    />
                    <ErrorMessage
                      name="user_number"
                      component="div"
                      className="w-full text-red-600 text-[14px]"
                    />
                  </div>
                  <div className={`w-full p-[10px]`}>
                    <input
                      type="text"
                      placeholder="Enter email"
                      className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="user_email"
                      value={values.user_email}
                    />
                    <ErrorMessage
                      name="user_email"
                      component="div"
                      className="w-full text-red-600 text-[14px]"
                    />
                  </div>
                  <div className={`w-full p-[10px]`}>
                    <textarea
                      type="text"
                      placeholder="Enter message"
                      rows={4}
                      className={`w-full border-b border-[#C7C7C7] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000] resize-none`}
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
                      classNames={`!w-full md:!w-auto`}
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
    </section>
  );
};

export default ConnectUs;
