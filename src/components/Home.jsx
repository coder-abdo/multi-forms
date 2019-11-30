import React, { useContext } from "react";
import { Store, BACK_MOVE, NEXT_MOVE } from "../Store";
import { StageOne } from "./StageOne.jsx";
import { StageTwo } from "./StageTwo.jsx";
import styles from "../styles/home.css";
export const Home = () => {
  const {
    state: { step },
    dispatch
  } = useContext(Store);
  const showStages = stage => {
    switch (stage) {
      case 0:
        return <StageOne />;
      case 1:
        return <StageTwo></StageTwo>;
      default:
        return <StageOne />;
    }
  };
  const handlePrevStepAction = () => {
    dispatch({ type: BACK_MOVE });
  };
  const handleNextStepAction = () => {
    dispatch({ type: NEXT_MOVE });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Description</h1>
        <h3>step {step + 1} of 3</h3>
      </div>
      {showStages(step)}
      <div className={styles.buttonsContainer}>
        <button
          disabled={step === 0}
          className={`${step > 0 ? styles.show : styles.hide} ${styles.btn}`}
          onClick={handlePrevStepAction}
        >
          back
        </button>
        <button
          disabled={step === 3}
          className={`${step < 3 ? styles.show : styles.hide} ${styles.btn}`}
          onClick={handleNextStepAction}
        >
          next
        </button>
      </div>
    </div>
  );
};
