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
              Last Updated: 4 Nov 2023
            </h5>
          </div>
          <div className={`w-full content-area`}>
            <p>
              {" "}
              At Nri's lifes, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our services, including will generation and related
              services, designed for Non-Resident Indians (NRIs). By using our
              website and services, you consent to the practices described in
              this Privacy Policy.
            </p>
            <h3> Information We Collect</h3>
            <p>
              We may collect the following types of information when you
              interact with our website and services:
            </p>
            <ul>
              <li>
                Personal Information: This includes your name, email address,
                phone number, and any other information you provide to us when
                creating an account or using our services.
              </li>
              <li>
                Payment Information: When you make payments for our services, we
                may collect payment details, such as credit card information,
                billing address, or other financial information necessary to
                process your transactions securely.
              </li>
              <li>
                User - Generated Content: Information that you voluntarily
                provide when using our services, such as data related to your
                will, estate planning, and any other related content.
              </li>
              <li>
                Usage Information: We collect data related to your interactions
                with our website and services, including your IP address, device
                information, browser type, and other analytics data to help
                improve our services and provide a better user experience.
              </li>
            </ul>
            <h3> How We Use Your Information</h3>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>
                Providing Services: We use your personal and user - generated
                information to deliver the services you requested, including
                will generation and other related services.
              </li>
              <li>
                Customer Support: We may use your information to respond to your
                inquiries, requests, and provide customer support.
              </li>
              <li>
                Payment Processing: Your payment information is used to process
                transactions and manage your account.
              </li>
              <li>
                Improving Services: We may use usage information to analyze how
                our services are used and make improvements.
              </li>
              <li>
                Legal and Regulatory Requirements: We may use your information
                to comply with legal and regulatory obligations.
              </li>
            </ul>
            <h3>Disclosure of Your Information</h3>
            <p>
              We do not sell your personal information.However, we may share
              your information with third parties under the following
              circumstances:
            </p>
            <ul>
              <li>
                Service Providers: We may share information with trusted third -
                party service providers who assist us in delivering our
                services, including payment processors and technical support.
              </li>
              <li>
                Legal Requirements: We may disclose information if required by
                law or to protect our rights, privacy, safety, or property, and
                to comply with legal processes or government requests.
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                other business transaction, your information may be transferred
                to another entity.
              </li>
            </ul>
            <h3> Your Privacy Choices</h3>
            <p>You have certain privacy choices, including:</p>
            <ul>
              <li>
                Account Information: You can review and update your account
                information by logging into your account.
              </li>
              <li>
                Communication Preferences: You can choose to receive or opt out
                of communications from us.
              </li>
              <li>
                Data Access and Deletion: You can request access to your data or
                request the deletion of your information by contacting us.
              </li>
            </ul>
            <h3> Data Security</h3>
            <p>
              We take data security seriously and have implemented safeguards to
              protect your information.However, no method of data transmission
              over the internet is entirely secure, so we cannot guarantee the
              absolute security of your data.
            </p>
            <h3>Children's Privacy</h3>
            <p>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
            <h3>Updates to Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices.The updated policy will be posted on our
              website with the revised date.
            </p>

            <h3> Contact Us</h3>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
              <a href="mailto:info@nrilife.com"> info@nrilife.com</a>.
            </p>
            <p>
              By using our website and services, you agree to the terms outlined
              in this Privacy Policy.Please review this policy regularly for
              updates and changes.Your continued use of our services signifies
              your acceptance of the policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
