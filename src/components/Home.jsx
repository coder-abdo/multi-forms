import React, { useState, useContext } from "react";
import { StageOne } from "./StageOne.jsx";
import { StageTwo } from "./StageTwo.jsx";
import { StageThree } from "./StageThree.jsx";
import { Review } from "./Review.jsx";
import styles from "../styles/home.css";
import { NEXT_MOVE, BACK_MOVE, Store } from "../Store.js";
export const Home = () => {
  const {
    state: { step },
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Description</h1>
        <h3>step {step} of 4</h3>
      </div>
      {showStages(step)}
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
          onClick={() => dispatch({ type: NEXT_MOVE })}
        >
          next
        </button>
      </div>
    </div>
  );
};
