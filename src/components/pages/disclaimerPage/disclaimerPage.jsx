import React from "react";

const DisclaimerPage = () => {
  return (
    <section className="py-[30px] md:py-[50px] mt-[118px]">
      <div className={`w-full relative max-w-[700px] mx-auto`}>
        <div className={`container mx-auto px-[15px] `}>
          <div className={`w-full mb-[30px]`}>
            <h1 className={`text-[30px]`}> Disclaimer</h1>
            <h5 className={`text-[14px] opacity-30`}>
              {" "}
              Last Updated: 22 Nov 2023
            </h5>
          </div>
          <div className={`w-full content-area`}>
            <p>
              {" "}
              NRI's Life, as the owner of the site, reserves the right to modify any content, including information about services, warranties, and any other details without prior notice.
            </p>
            <p>
              We do not represent or warrant that the information accessible through this site is accurate, complete, or current. Price and availability information is subject to change without notice.
            </p>
            <p>
              As part of our ongoing commitment to process improvement at NRI's Life, task descriptions, information required for task completion, indicative time for task completion, and prices may be subject to change without prior notice.
            </p>
            <p>
              The contents provided here are for informational purposes only and do not constitute or imply a recommendation or endorsement.
            </p>
            <p>
              All contents, including design, are the property of NRI's Life; unauthorized copying for commercial purposes is strictly prohibited.
            </p>
            <p>
              Please ensure that you keep your login email ID and password, chosen during registration, confidential. Any damage or loss resulting from the misuse of your personal information will be your responsibility.
            </p>
            <p>
              Unauthorized modification of any information on this site may lead to criminal prosecution. By using this site for any purpose, you agree not to hold NRI's Life liable for damage resulting from such attacks.
            </p>
            <p>
              The information on this site is subject to the usual uncertainties of changing procedures, advancements in systems, and information research. It may not be accurate, current, or complete, and should never be relied upon as the basis for action or inaction.
            </p>
            <p>
              Links to other sites do not constitute endorsements.
            </p>
            <p>
              The World Wide Web exists across insecure public networks, and there is a risk that transmissions to or from this site may be intercepted and modified by third parties. Files obtained from or through this site may contain computer viruses or other defects. NRI's Life will not be responsible for any damage resulting from such events.
            </p>
            <p>
              By using this site, the user is assumed to have accepted all risks and responsibility for losses, damages, costs, and other consequences resulting directly or indirectly from its use, as well as any information or material available from it.
            </p>



          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerPage;
