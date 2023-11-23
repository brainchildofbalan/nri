import Link from "next/link";
import React from "react";

const TermsOfServicePage = () => {
  return (
    <section className="py-[30px] md:py-[50px] mt-[118px]">
      <div className={`w-full relative max-w-[700px] mx-auto`}>
        <div className={`container mx-auto px-[15px] `}>
          <div className={`w-full mb-[30px]`}>
            <h1 className={`text-[30px]`}> Terms of Service</h1>
            <h5 className={`text-[14px] opacity-30`}>
              {" "}
              Last Updated: 22 Nov 2023
            </h5>
          </div>
          <div className={`w-full content-area`}>
            <p>Welcome to NRI's Life, a service provided by NRI's Life.</p>
            <p>
              <a href="http://nrilife.com/">nrilife.com</a> offers this service
              to you under the following Terms of Service ("TOS"), which may be
              updated without notice. You are also subject to the operating
              rules/policies for individual services on{" "}
              <a href="http://nrilife.com/">nrilife.com</a>, as posted from time
              to time. <a href="http://nrilife.com/">nrilife.com</a> may provide
              other services governed by different Terms of Service.
            </p>
            <h3>Acknowledgment and Acceptance of Terms of Service:</h3>
            <p>
              <a href="http://nrilife.com/">nrilife.com</a> ("Service") is owned
              and operated by NRI's Life, hereinafter referred to as "NRI's
              Life." This Service is provided to you ("Member") under the Terms
              of Service ("TOS") and any operating rules or policies published
              on NRI's Life.
            </p>
            <h3>Description of Service:</h3>
            <p>
              NRI's Life offers a platform to facilitate various tasks in India
              professionally, accessible worldwide via the NRI's Life service.
              NRI's Life reserves the right to charge the Member or their
              Parents/Friends/Relatives for this service, as per the tariff
              structure on NRI's Life. The Member must: (1) provide all
              equipment, including a computer and modem, necessary to establish
              a connection to the World Wide Web; (2) provide their access to
              the World Wide Web and pay any associated telephone service fees.
            </p>
            <p>
              In consideration for this Service, the Member agrees to: (1)
              provide current, complete, and accurate information as prompted by
              the Service and (2) maintain and update this information to keep
              it current, complete, and accurate. Information requested during
              sign-up is referred to as registration data ("Registration Data")
              (3) Provide correct and accurate information to enable NRI's Life
              to deliver services as requested by the Member. Information
              requested for executing task requests is referred to as
              Order-related data ("Order Data").
            </p>
            <p>
              Furthermore, the Member grants NRI's Life the right to disclose
              certain Registration Data about the Member and Service membership,
              excluding personal details, unless directed by the Member or
              required by law. Inaccurate information may lead to termination of
              membership.
            </p>
            <p>
              NRI's Life, as a merchant, is not liable for losses due to
              declined authorizations or exceeding preset limits.
            </p>
            <h3>Modifications to Terms of Service:</h3>
            <p>
              NRI's Life may change the terms of service without notice. The
              Member's continued use of the Service constitutes acknowledgment
              and agreement to abide by the modified terms.
            </p>
            <h3>Modifications to any Services:</h3>
            <p>
              NRI's Life reserves the right to modify or discontinue the NRI's
              Life service with or without notice. NRI's Life shall not be
              liable to the Member or any third party for exercising this right.
            </p>
            <p>
              Please review our Privacy Policy Statement at{" "}
              <Link href={`/privacy-policy`} children={`Privacy Policy Link`} />
              .
            </p>
            <h3>Effective Date of Terms of Service:</h3>
            This Terms of Service is effective as of 23rd November 2023.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
