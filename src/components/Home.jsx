import React, { useState, useContext } from "react";
import { StageOne } from "./StageOne.jsx";
import { StageTwo } from "./StageTwo.jsx";
import { StageThree } from "./StageThree.jsx";
import { Review } from "./Review.jsx";
import styles from "../styles/home.css";
import { NEXT_MOVE, BACK_MOVE, SET_ERRORS, Store } from "../Store.js";
export const Home = () => {
  const {
    state: { step, errors, projectType, services, user },
    dispatch
  } = useContext(Store);

  const showStages = stage => {
    switch (stage) {
      case 1:
        return <StageOne />;
      case 2:
        return <StageTwo />;
      case 3:
        return <StageThree />;
      case 4:
        return <Review />;
      default:
        return <StageOne />;
    }
  };

  const handleUserDetailsErr = () => {
    if (Object.keys(user).length === 0) {
      dispatch({
        type: SET_ERRORS,
        payload: "please fill the input fields"
      });
    } else if (user["tel"] && user.inpuType === "tel") {
      dispatch({
        type: SET_ERRORS,
        payload: "please fill the tel filed"
      });
    } else if (user["email"] && user.inpuType === "email") {
      dispatch({
        type: SET_ERRORS,
        payload: "please fill the email field"
      });
    } else {
      dispatch({
        type: SET_ERRORS,
        payload: ""
      });
      dispatch({ type: NEXT_MOVE });
    }
  };
  const handleNextMove = () => {
    if (step === 1) {
      if (projectType.length === 0) {
        return dispatch({
          type: SET_ERRORS,
          payload: "please choose your project type!!"
        });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: ""
        });
        dispatch({
          type: NEXT_MOVE
        });
      }
    } else if (step === 2) {
      if (services.length === 0) {
        return dispatch({
          type: SET_ERRORS,
          payload: "please choose the services you want"
        });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: ""
        });
        dispatch({
          type: NEXT_MOVE
        });
      }
    } else if (step === 3) {
      handleUserDetailsErr();
    } else {
      return dispatch({
        type: NEXT_MOVE
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Description</h1>
        <h3>step {step} of 4</h3>
      </div>
      {showStages(step)}
      {errors.length > 0 && <h3 className={styles.error}>{errors}</h3>}
      <div className={styles.buttonsContainer}>
        <button
          disabled={step < 1}
          className={`${step > 1 ? styles.show : styles.hide} ${styles.btn}`}
          onClick={() => dispatch({ type: BACK_MOVE })}
        >
          back
        </button>
        <button
          disabled={step >= 4}
          className={`${step <= 3 ? styles.show : styles.hide} ${styles.btn}`}
          onClick={handleNextMove}
        >
          next
        </button>
      </div>
    </div>
  );
};
