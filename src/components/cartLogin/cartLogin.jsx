"use client";
import React from "react";
import Button from "../button";
import { ErrorMessage, Form, Formik } from "formik";
import { useCartLogin } from "./useCartLogin";

const CartLogin = ({ isOpen, setLogin }) => {
  const { handleSubmitFrom, initialValues, validationSchema } = useCartLogin({
    setLogin,
  });
  return (
    <>
      {isOpen && (
        <div
          className={`w-full bg-black bg-opacity-50 fixed left-0 top-0 h-full flex justify-center items-center`}
        >
          <div className={`w-full max-w-[500px]`}>
            <div className={`w-full p-[20px] bg-[#F8F5F5]`}>
              <div
                className={`w-full mb-[10px] flex justify-between px-[10px] items-center`}
              >
                <h3 className={`w-auto mb-0 text-[22px] text-left `}>Login</h3>
                <button
                  className="relative flex justify-center w-[16px] h-[16px] items-center"
                  onClick={() => setLogin(false)}
                >
                  <span className="w-[16px] h-[2px] bg-black block absolute rotate-45"></span>
                  <span className="w-[16px] h-[2px] bg-black block absolute -rotate-45"></span>
                </button>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmitFrom}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className={`w-full p-[10px]`}>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        name="email_address"
                        value={values.email_address}
                        placeholder="Enter email address"
                        className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      />
                      <ErrorMessage
                        name="email_address"
                        component="div"
                        className="w-full text-red-600 text-[14px]"
                      />
                    </div>

                    <div className={`w-full p-[10px]`}>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        name="password"
                        value={values.password}
                        placeholder="Enter password"
                        className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="w-full text-red-600 text-[14px]"
                      />
                    </div>
                    <div className={`w-full p-[10px] flex justify-end`}>
                      <Button text={`Login`} type="submit" />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartLogin;
