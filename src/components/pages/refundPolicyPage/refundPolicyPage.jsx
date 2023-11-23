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
              In the dynamic service industry, customer satisfaction is our
              North Star for success. While a happy customer may or may not
              actively recommend a service, a dissatisfied customer is sure to
              advise against dealing with a particular service provider.
            </p>
            <p>
              At NRI's Life, although we are relatively new to the scene, we are
              unwavering in our commitment to success, understanding that
              satisfied customers are the linchpin to thriving in the service
              sector.
            </p>
            <p>
              Our refund policy for services procured through NRI's Life is
              governed by the Satisfaction-or-Money-Back Guarantee & Refund
              Policy outlined below. Additionally, specific services may have
              their own unique refund policies. In such cases, the individual
              Satisfaction-or-Money-Back Guarantee & Refund Policy will be
              applicable in conjunction with this overarching policy unless it
              contradicts, in which case the specific service policy will
              supersede:
            </p>
            <ul>
              <li>
                <b>Order Payment and Review:</b> Your payments for orders placed
                with us are momentarily on hold until our Customer Service
                reviews the order's serviceability. Payment processing kicks in
                only after customer service greenlights your order. During this
                period, you can request changes to your order details. If, upon
                review, your order is deemed unserviceable, you have the
                flexibility to amend the order or receive a full refund.
              </li>
              <li>
                <b>Cancellation Policy:</b> Should you have a change of heart
                and wish to opt-out after placing an order, a cancellation
                request is welcomed. If the cancellation request is made before
                customer service reviews and accepts the order, a
                no-questions-asked full refund will be processed. <br />
                <br />
                Our standard review and acceptance timeline is within a maximum
                of 48 hours from placing the order. Once customer service
                accepts your order, it attains confirmed status. Confirmed
                orders are eligible for cancellation upon client request or due
                to other reasons.
              </li>
            </ul>
            <h3>Refund Structure:</h3>
            <p>Refunds for cancellations follow this structure:</p>
            <ul>
              <li>
                If an order is canceled at the client's request, NRI's Life will
                deduct 25% of the order value as a cancellation fee, and the
                balance will be refunded. Any additional quote amount paid by
                the client will be refunded after deducting costs already
                incurred in executing the task.
              </li>
              <li>
                If an order couldn't be completed for reasons other than
                client-requested cancellation, a refund will be issued after
                deducting 25% of the order value plus costs already incurred in
                executing the task. Situations leading to this could include
                insufficient or delayed documentation/information from the
                customer, errors/mistakes beyond NRI's Life's scope of work, the
                customer's inability to follow procedures or requirements, or
                any other reasons beyond NRI's Life's control.
              </li>
              <li>
                If an order couldn't be fulfilled due to reasons attributed to
                NRI's Life's performance on the task requirement, a full refund
                will be provided.
              </li>
            </ul>
            <h3>Responsibility and Limitations:</h3>
            <p>
              NRI's Life acts as a facilitator in India on behalf of the
              customer and cannot be held responsible for bureaucratic delays
              when dealing with government bodies, academic institutions, or
              external agencies. All tasks are executed on a best-effort basis
              only. The company's decision is deemed final and binding in such
              matters.
            </p>
            <p>
              Any additional costs already incurred in executing your task will
              be deducted where applicable. The maximum time taken to refund
              money after processing a cancellation request is 7 days.
            </p>
            <h3>Satisfaction-or-Money-Back Guarantee:</h3>
            <p>
              Post completion of an order, the Satisfaction-or-Money-Back
              Guarantee becomes effective. After service provision, if the
              client feels dissatisfied for any reason, they have the
              prerogative to request a money-back refund under the Money Back
              Guarantee.
            </p>
            <p>
              The window to claim a refund under the Satisfaction-or-Money-Back
              Guarantee is a maximum of 10 days from the date the order is fully
              executed.
            </p>
            <p>
              Should you encounter any issues with our
              Satisfaction-or-Money-Back Guarantee & Refund Policy or experience
              delays with your cancellation request, feel free to reach out to
              us at <a href="mailto:info@nrilife.com">info@nrilife.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyPage;
