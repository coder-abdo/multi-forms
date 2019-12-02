import React, { useContext } from "react";
import { Store } from "../Store.js";
import { WebDevelopment } from "./WebDevelopment.jsx";
import { BrandIdentity } from "./BrandIdentity.jsx";
import { MobileApplication } from "./MobileApplication.jsx";
export const StageTwo = ({ formRef }) => {
  const { state } = useContext(Store);
  const switchCost = state => {
    switch (state.projectType) {
      case "brand identity":
        return <BrandIdentity />;
      case "web development":
        return <WebDevelopment />;
      case "mobile application":
        return <MobileApplication />;
      default:
        return <BrandIdentity />;
    }
  };
  return <div>{switchCost(state)}</div>;
};
