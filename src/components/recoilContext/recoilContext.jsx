"use client";

import { RecoilRoot } from "recoil";
const RecoilContext = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContext;
