"use client";
import React from "react";
import Button from "../button";
import Image from "next/image";
import { useCartDetails } from "./useCartDetails";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CartLogin from "../cartLogin/cartLogin";
import Checkout from "../checkout/checkout";

const CartDetails = () => {
  const {
    cartList,
    totalAmountSub,
    taxPercentage,
    totalAmount,
    initialValues,
    handleSubmitFrom,
    validationSchema,
    handleDelete,
    cartLogin,
    setCartLogin,
  } = useCartDetails();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitFrom}
        enableReinitialize
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className={`w-full py-[50px]`}>
              <div className={`container mx-auto px-[15px]`}>
                <div className={`w-full flex flex-wrap relative -m-[10px]`}>
                  <div className={`w-2/3 p-[10px]`}>
                    <div className={`w-full relative`}>
                      <div className={`w-full flex justify-end mb-[20px]`}>
                        <Button text={`Add more package`} />
                      </div>
                      <div className={`w-full relative`}>
                        {cartList &&
                          cartList.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className={`w-full flex flex-wrap items-center border p-[15px]`}
                              >
                                <div
                                  className={`w-full flex-1 flex items-center`}
                                >
                                  <div className={`w-3/6`}>
                                    <p
                                      className={`mb-0 text-[20px] font-medium`}
                                    >
                                      {item.title.category_name}
                                    </p>
                                  </div>
                                  <div className={`w-2/6`}>
                                    <p
                                      className={`mb-0 text-[16px] opacity-40`}
                                    >
                                      Estimated time : 1 week
                                    </p>
                                  </div>
                                  <div className={`w-1/6`}>
                                    <p
                                      className={`mb-0 text-[20px] font-semibold`}
                                    >
                                      ${item.price}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={`w-[35px] flex items-center justify-center`}
                                >
                                  <button
                                    onClick={() => handleDelete(index)}
                                    type="button"
                                  >
                                    <Image
                                      src={`/images/cart/delete.svg`}
                                      width={20}
                                      height={20}
                                    />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                      </div>

                      {/* /
                    /
                    /
                    /
                    /
                    /
                    / */}

                      <div className={`w-full relative mt-[20px]`}>
                        <div className={`w-full bg-[#F8F5F5] p-[30px]`}>
                          <div
                            className={`w-full flex justify-between items-center  mb-[20px] px-[10px]`}
                          >
                            <h3
                              className={` relative text-left text-[18px] mb-0 font-medium`}
                            >
                              Update User Details
                            </h3>
                            <button
                              className={`w-auto underline`}
                              onClick={() => setCartLogin(true)}
                            >
                              already have account
                            </button>
                          </div>
                          <div className={`w-full flex flex-wrap relative`}>
                            <div className={`w-full md:w-1/2 p-[10px]`}>
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                name="user_name"
                                value={values.user_name}
                                placeholder="Enter name"
                                className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                              />
                              <ErrorMessage
                                name="user_name"
                                component="div"
                                className="w-full text-red-600 text-[14px]"
                              />
                            </div>
                            <div className={`w-full md:w-1/2 p-[10px]`}>
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                name="email_address"
                                value={values.email_address}
                                placeholder="Enter name"
                                className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                              />
                              <ErrorMessage
                                name="email_address"
                                component="div"
                                className="w-full text-red-600 text-[14px]"
                              />
                            </div>
                            <div className={`w-full md:w-1/2 p-[10px]`}>
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="number"
                                name="number"
                                value={values.number}
                                placeholder="Enter name"
                                className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                              />
                              <ErrorMessage
                                name="number"
                                component="div"
                                className="w-full text-red-600 text-[14px]"
                              />
                            </div>
                            <div className={`w-full md:w-1/2 p-[10px]`}>
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="date"
                                name="date_of_birth"
                                value={values.date_of_birth}
                                placeholder="Enter name"
                                className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                              />
                              <ErrorMessage
                                name="date_of_birth"
                                component="div"
                                className="w-full text-red-600 text-[14px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* /
                  /
                  /
                  /
                  /
                  / */}
                    </div>
                  </div>
                  <div className={`w-1/3 p-[10px] mt-[30px]`}>
                    <div className={`w-full flex justify-end`}>
                      <button
                        className={`underline text-[16px] mb-[15px] opacity-50`}
                      >
                        Clear cart
                      </button>
                    </div>
                    <div className={`w-full bg-[#F8F5F5] p-[20px] text-[18px]`}>
                      <h3 className={`font-medium mb-[20px]`}>Cart Summary</h3>
                      <div
                        className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b`}
                      >
                        <div className={`w-1/2`}>Sub total Price</div>
                        <div className={`w-1/2 font-medium`}>
                          ${totalAmountSub}
                        </div>
                      </div>
                      <div
                        className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b border-[#b1b1b1]`}
                      >
                        <div className={`w-1/2`}>Tax (8%)</div>
                        <div className={`w-1/2 font-medium`}>
                          ${taxPercentage}
                        </div>
                      </div>

                      <div className={`w-full flex flex-wrap `}>
                        <div className={`w-1/2 font-medium`}>Total</div>
                        <div className={`w-1/2 font-medium`}>
                          ${totalAmount}
                        </div>
                      </div>
                    </div>
                    <Button
                      text={`Check out`}
                      classNames={`!bg-[#ED781A] !w-full`}
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <CartLogin isOpen={cartLogin} setLogin={setCartLogin} />
    </>
  );
};

export default CartDetails;
