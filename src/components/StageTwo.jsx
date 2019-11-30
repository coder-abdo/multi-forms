import React, { useContext } from "react";
import { Store } from "../Store.js";
import { WebDevelopment } from "./WebDevelopment.jsx";
import { BrandIdentity } from "./BrandIdentity.jsx";
import { MobileApplication } from "./MobileApplication.jsx";
export const StageTwo = ({ children }) => {
  const { state } = useContext(Store);
  const switchCost = state => {
    switch (state.services) {
      case "brandIdentity":
        return <BrandIdentity />;
      case "webDevelopment":
        return <WebDevelopment />;
      case "mobileApplication":
        return <MobileApplication />;
      default:
        return <BrandIdentity />;
    }
  };
  return <div>{switchCost(state)}</div>;
};
