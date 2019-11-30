import React, { createContext, useReducer } from "react";
export const NEXT_MOVE = "NEXT_MOVE";
export const BACK_MOVE = "BACK_MOVE";
export const BRAND_IDENTITY = "BRAND_IDENTITY";
export const MOBILE_APPLICATION = "MOBILE_APPLICATION";
export const WEB_DEVELOPMENT = "WEB_DEVELOPMENT";
export const COST = "COST";
const InitialState = {
  step: 0,
  isCompleted: false,
  services: "",
  user: null,
  cost: 0
};
const reducers = (state, { type, payload }) => {
  switch (type) {
    case NEXT_MOVE:
      if (state.step >= 2) {
        return {
          ...state,
          step: 2
        };
      }
      return {
        ...state,
        step: state.step + 1
      };
    case BACK_MOVE:
      if (state.step <= 0) {
        return {
          ...state,
          step: 0
        };
      }
      return {
        ...state,
        step: state.step - 1
      };
    case BRAND_IDENTITY:
      return {
        ...state,
        isCompleted: true,
        services: "brandIdentity"
      };
    case MOBILE_APPLICATION:
      return {
        ...state,
        isCompleted: true,
        services: "mobileApplication"
      };
    case WEB_DEVELOPMENT:
      return {
        ...state,
        isCompleted: true,
        services: "webDevelopment"
      };
    case COST:
      return {
        ...state,
        cost: payload
      };
    default:
      return state;
  }
};
export const Store = createContext(null);
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, InitialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
