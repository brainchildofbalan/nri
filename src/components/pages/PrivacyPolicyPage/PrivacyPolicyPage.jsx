import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="py-[30px] md:py-[50px] mt-[118px]">
      <div className={`w-full relative max-w-[700px] mx-auto`}>
        <div className={`container mx-auto px-[15px] `}>
          <div className={`w-full mb-[30px]`}>
            <h1 className={`text-[30px]`}> Privacy Policy</h1>
            <h5 className={`text-[14px] opacity-30`}>
              {" "}
              Last Updated: 22 Nov 2023
            </h5>
          </div>
          <div className={`w-full content-area`}>
            <p>
              {" "}
              NRI's Life is committed to safeguarding the privacy of its
              customers. We pledge to:
            </p>
            <p>
              Ensure the security and confidentiality of all customer-provided
              information in accordance with strict standards.
            </p>
            <p>
              Limit the collection and use of customer information to the
              minimum necessary for effective and quality service delivery,
              ensuring a personalized experience.
            </p>
            <p>
              Grant access to customer information solely to authorized
              employees/personnel on a need-to-know basis, after rigorous
              training in proper information handling.
            </p>
            <p>
              Authorize Service Providers and external organizations, like
              courier companies, access to customer information strictly on a
              need-to-know basis.
            </p>
            <p>
              Address confidentiality violations by employees, Service
              Providers, or external organizations in strict accordance with
              contractual agreements.
            </p>
            <p>
              Offer customers the option to receive emails providing updates on
              special offers, new services, and significant upgrades upon
              registration or service order.
            </p>
            <p>
              Cooperate fully in situations requiring the provision of customer
              information by law or legal processes.
            </p>
            <p>
              Share non-personal, non-individual statistical or demographic
              information in aggregate form with marketing partners,
              advertisers, or third parties for research and advertising
              purposes.
            </p>
            <p>
              Not monitor, edit, or disclose the contents of a Member's private
              communications unless compelled by law or in the good faith belief
              that such action is necessary to conform to legal edicts, protect
              and defend the Agreement or property, or act under exigent
              circumstances.
            </p>
            <p>
              Have members acknowledge and agree that NRI's Life neither
              endorses the contents of any Member communications nor assumes
              responsibility for any threatening, libelous, obscene, harassing,
              or offensive material contained therein, any infringement of
              third-party intellectual property rights, Agreement arising
              therefrom, or any crime facilitated thereby.
            </p>

            <p>
              Reserve the right to modify this Privacy Policy at any time,
              posting such changes to ensure awareness of information
              collection, usage, and disclosure circumstances.
            </p>

            <p>
              Customers are encouraged to review our{" "}
              <Link
                href={`/terms-of-services`}
                children={`Terms of Service`}
                className="underline"
              />{" "}
              for the Effective Date of this Privacy Policy.
            </p>

            <p>This Privacy Policy is effective as of 22 November 2023.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
