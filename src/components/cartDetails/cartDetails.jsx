"use client";
import React from "react";
import Button from "../button";
import Image from "next/image";
import { useCartDetails } from "./useCartDetails";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CartLogin from "../cartLogin/cartLogin";
import Checkout from "../checkout/checkout";
import Script from "next/script";

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
    clearCart,
    makePayment,
  } = useCartDetails();

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      {cartList && (
        <>
          {cartList.length !== 0 ? (
            <>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmitFrom}
                enableReinitialize
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className={`w-full py-[30px] md:py-[50px]`}>
                      <div className={`container mx-auto px-[15px]`}>
                        <div
                          className={`w-full flex flex-wrap relative lg:-m-[10px]`}
                        >
                          <div className={`w-full lg:w-2/3 p-[10px]`}>
                            <div className={`w-full relative`}>
                              <div
                                className={`w-full  justify-end mb-[20px] hidden lg:flex`}
                              >
                                <Button
                                  text={`Add more package`}
                                  as={`link`}
                                  href={`/services`}
                                />
                              </div>
                              <div className={`w-full relative`}>
                                {cartList &&
                                  cartList.map((item, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className={`w-full flex flex-wrap items-center border p-[10px] md:p-[15px]`}
                                      >
                                        <div
                                          className={`w-full flex-1 flex flex-wrap md:flex-nowrap items-center pr-[10px] md:pr-[0px]`}
                                        >
                                          <div className={`w-4/6 md:w-3/6`}>
                                            <p
                                              className={`mb-0 text-[18px] lg:text-[20px] font-medium`}
                                            >
                                              {item.title.category_name}
                                            </p>
                                          </div>
                                          <div className={`w-2/6`}>
                                            <p
                                              className={`mb-0 text-[12px] lg:text-[16px] opacity-40`}
                                            >
                                              Estimated time : 1 week
                                            </p>
                                          </div>
                                          <div
                                            className={`w-full md:w-1/6 border-t mt-[10px] pt-[10px] md:border-t-0 md:mt-[0px] md:pt-[0px]`}
                                          >
                                            <p
                                              className={`mb-0 text-[20px] font-semibold`}
                                            >
                                              ₹{item.price}
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
                                <div
                                  className={`w-full bg-[#F8F5F5] p-[8px]  lg:p-[30px]`}
                                >
                                  <div
                                    className={`w-full flex flex-col lg:flex-row justify-between items-center  mb-[20px] px-[10px]`}
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
                                  <div
                                    className={`w-full flex flex-wrap relative`}
                                  >
                                    <div className={`w-full md:w-1/2 p-[10px]`}>
                                      <label
                                        htmlFor=""
                                        className={`mb-[10px] flex opacity-50`}
                                      >
                                        User name
                                      </label>
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
                                      <label
                                        htmlFor=""
                                        className={`mb-[10px] flex opacity-50`}
                                      >
                                        Email address
                                      </label>
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
                                    <div className={`w-full md:w-1/2 p-[10px]`}>
                                      <label
                                        htmlFor=""
                                        className={`mb-[10px] flex opacity-50`}
                                      >
                                        Mobile number
                                      </label>
                                      <input
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="number"
                                        name="number"
                                        value={values.number}
                                        placeholder="Enter mobile number"
                                        className={`w-full border-b border-[#C7C7C7] h-[55px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                                      />
                                      <ErrorMessage
                                        name="number"
                                        component="div"
                                        className="w-full text-red-600 text-[14px]"
                                      />
                                    </div>
                                    <div className={`w-full md:w-1/2 p-[10px]`}>
                                      <label
                                        htmlFor=""
                                        className={`mb-[10px] flex opacity-50`}
                                      >
                                        Date of birth
                                      </label>
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

                                    <div className={`w-full p-[10px]`}>
                                      <label
                                        htmlFor=""
                                        className={`mb-[10px] flex opacity-50`}
                                      >
                                        address
                                      </label>
                                      <textarea
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows={5}
                                        type="date"
                                        name="address"
                                        value={values.address}
                                        placeholder="Enter address"
                                        className={`w-full border-b border-[#C7C7C7] h-[90px] p-[18px] placeholder:text-black text-[18px] focus-visible:outline-none focus-visible:shadow-none focus:border-[#000000]`}
                                      />
                                      <ErrorMessage
                                        name="address"
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
                          <div className={`w-full lg:w-1/3 p-[10px] mt-[30px]`}>
                            <div className={`w-full flex justify-end`}>
                              <button
                                className={`underline text-[16px] mb-[15px] opacity-50`}
                                onClick={clearCart}
                              >
                                Clear cart
                              </button>
                            </div>
                            <div
                              className={`w-full bg-[#F8F5F5] p-[20px] text-[18px]`}
                            >
                              <h3 className={`font-medium mb-[20px]`}>
                                Cart Summary
                              </h3>
                              <div
                                className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b`}
                              >
                                <div className={`w-1/2`}>Sub total Price</div>
                                <div className={`w-1/2 font-medium`}>
                                  ₹{totalAmountSub}
                                </div>
                              </div>
                              <div
                                className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b border-[#b1b1b1]`}
                              >
                                <div className={`w-1/2`}>Tax (6%)</div>
                                <div className={`w-1/2 font-medium`}>
                                  ₹{taxPercentage}
                                </div>
                              </div>

                              <div className={`w-full flex flex-wrap `}>
                                <div className={`w-1/2 font-medium`}>Total</div>
                                <div className={`w-1/2 font-medium`}>
                                  ₹{totalAmount}
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
          ) : (
            <>
              <div className={`w-full min-h-[100vh] pt-[50px]`}>
                <div className={`container px-[15px] mx-auto`}>
                  <div
                    className={`w-[70px] h-[70px] mb-[20px] mx-auto relative`}
                  >
                    <Image
                      alt="empty cart image"
                      objectFit="contain"
                      src={`/empty-cart.png`}
                      fill
                    />
                  </div>

                  <div
                    className={`w-full relative flex flex-col items-center justify-center`}
                  >
                    <h3 className={`text-[22px] mb-[5px]`}>
                      Your cart is empty
                    </h3>
                    <p className={`mb-[20px] w-full max-w-[280px] text-center`}>
                      Looks like you have not added anything to the cart.
                    </p>
                    <Button
                      as={`link`}
                      href={`/services`}
                      text={`View services`}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CartDetails;
