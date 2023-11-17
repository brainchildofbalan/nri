"use client";

import Button from "@components/components/button";

const SuccessPage = ({ data }) => {
  //   const data = await useFetch(`/order/${search}`);
  const { order_number, order_amount, order_amount_sub, tax_amount } = data[0];
  console.log({ data });
  return (
    <section
      className={`w-full pt-[107px] pb-[50px] min-h-[100vh] flex items-center`}
    >
      <div className={`container mx-auto px-[15px]`}>
        <div className={`w-full flex flex-wrap relative -m-[10px]`}>
          <div className={`max-w-[400px] mx-auto`}>
            <div className={`w-full  flex flex-col gap-[10px]`}>
              <div
                className={`w-[80px] h-[80px] rounded-full border-2 border-green-500 flex justify-center items-center pb-[5px]`}
              >
                <span
                  className={`w-[10px] h-[22px] border-b-[3px] border-r-[3px] border-green-500 rotate-45`}
                ></span>
              </div>
              <h3 className={`text-[25px] font-medium `}>
                Thank you for your purchase!
              </h3>
              <p>
                We will contact you for confirmation with details and info. for
                more update contact +917994298158
              </p>
              <p className={`pb-[10px]`}>
                Order Id : <b>{order_number}</b>
              </p>
              <Button
                as={`link`}
                href={`/services`}
                text={`Continue shopping`}
              />
            </div>

            <div className={`w-full border p-[20px] text-[18px] mt-[20px]`}>
              <h3 className={`font-medium mb-[20px]`}>Order Summary</h3>
              <div
                className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b`}
              >
                <div className={`w-1/2`}>Sub total Price</div>
                <div className={`w-1/2 font-medium`}>₹{order_amount_sub}</div>
              </div>
              <div
                className={`w-full flex flex-wrap pb-[15px] mb-[15px] border-b`}
              >
                <div className={`w-1/2`}>Tax (8%)</div>
                <div className={`w-1/2 font-medium`}>₹{Number(tax_amount).toFixed(2)}</div>
              </div>

              <div className={`w-full flex flex-wrap `}>
                <div className={`w-1/2 font-medium`}>Total</div>
                <div className={`w-1/2 font-medium`}>₹{order_amount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
