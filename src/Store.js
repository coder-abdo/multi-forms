import React, { createContext, useReducer } from "react";
export const TYPE = "TYPE";
export const NEXT_MOVE = "NEXT_MOVE";
export const BACK_MOVE = "BACK_MOVE";
export const ADD_SERVICES = "ADD_SERVICES";
export const REMOVE_SERVICES = "REMOVE_SERVICES";
export const USER_DETAILS = "USER_DETAILS";
export const USER_CHOICE = "USER_CHOICE";
export const SET_ERRORS = "SET_ERRORS";
const InitialState = {
  projectType: "",
  inputType: "",
  step: 1,
  services: [],
  errors: "",
  user: {}
};
const reducers = (state, { type, payload }) => {
  switch (type) {
    case TYPE:
      return {
        ...state,
        projectType: payload
      };
    case NEXT_MOVE:
      if (state.step > 4) {
        return {
          ...state,
          step: 4
        };
      }
      if (!state.errors.length) {
        return {
          ...state,
          step: state.step + 1
        };
      }
    case BACK_MOVE:
      if (state.step < 1) {
        return {
          ...state,
          step: 1
        };
      }
      return {
        ...state,
        step: state.step - 1
      };
    case ADD_SERVICES:
      return {
        ...state,
        services: [...state.services, payload]
      };
    case REMOVE_SERVICES:
      return {
        ...state,
        services: state.services.filter(service => service.id !== payload)
      };
    case USER_DETAILS:
      return {
        ...state,
        user: payload
      };
    case USER_CHOICE:
      return {
        ...state,
        inputType: payload
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: payload
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
