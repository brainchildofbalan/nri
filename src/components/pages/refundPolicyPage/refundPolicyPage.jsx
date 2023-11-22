import React from "react";

const RefundPolicyPage = () => {
  return (
    <section className="py-[30px] md:py-[50px] mt-[118px]">
      <div className={`w-full relative max-w-[700px] mx-auto`}>
        <div className={`container mx-auto px-[15px] `}>
          <div className={`w-full mb-[30px]`}>
            <h1 className={`text-[30px]`}> Refund Policy</h1>
            <h5 className={`text-[14px] opacity-30`}>
              {" "}
              Last Updated: 22 Nov 2023
            </h5>
          </div>
          <div className={`w-full content-area`}>
            <p>
              At NRI Life, our commitment to success is reflected in our
              dedication to providing a seamless and satisfactory experience for
              our customers. We understand that circumstances may arise where a
              refund is necessary, and we aim to address such situations with
              fairness and transparency.
            </p>
            <h3>Payments</h3>

            <ul>
              <li>
                For our online services, payments can be conveniently made
                through the designated methods outlined on the website,
                including secure payment gateways. For offline services, we
                accept payments via NEFT for your convenience.
              </li>
              <li>
                All services are subject to applicable service tax rates,
                ensuring compliance with prevailing tax regulations for
                transparency and accuracy.
              </li>
            </ul>
            <h3> Cancellation and Refund</h3>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>
                Ways of refund & Cancellation - we shall refund to same Payment
                ID from where we have received payment.
              </li>
              <li>
                Refund initiation days – within 48 hours of Refund Claim
                approval due to our failure to resolve technical issue
              </li>
              <li>
                Refund & Cancellation point of contact mail id and contact
                number – <a href="mailto:info@nrilife.com">info@nrilife.com</a>
              </li>
              <li>
                A full Refund cannot be claimed if any part of the service or
                after having a consultation call.
              </li>
              <li>
                We reserve the right to determine, at our sole discretion,
                whether a specific case qualifies for a full refund or not.
              </li>
              <li>
                Any refunds made shall be subject to deduction of payment
                gateway charges by us, if applicable.
              </li>
            </ul>
            <br />
            <p>
              If you have second thoughts and decide to opt out of an order
              after placing it, you are free to request a cancellation. A full
              refund will be processed if the cancellation request is made
              before customer service reviews and accepts the order—no questions
              asked.
            </p>

            <p>
              NRI Life operates as a facilitator in India on behalf of
              customers. While we strive to provide efficient services, we
              cannot be held responsible for bureaucratic delays encountered
              when dealing with government bodies, academic institutions, or
              external agencies. All tasks are executed on a best-effort basis.
              The final decision of the company in these matters is conclusive
              and binding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyPage;
