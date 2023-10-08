import BreadCrumbs from "@components/components/breadCrumbs";
import AboutIntro from "@components/widgets/aboutIntro";
import WhyAbout from "@components/widgets/aboutIntro/whyAbout";
import ConnectUs from "@components/widgets/connectUs";
import FeaturedServices from "@components/widgets/featuredServices";
import HappyCustomers from "@components/widgets/happyCustomers";
import React from "react";

const AboutUsPage = ({ data }) => {
  return (
    <>
      <BreadCrumbs title={`About us`} />
      <AboutIntro />
      <WhyAbout />
      <FeaturedServices {...data} />
      <HappyCustomers />
      <ConnectUs />
    </>
  );
};

export default AboutUsPage;
