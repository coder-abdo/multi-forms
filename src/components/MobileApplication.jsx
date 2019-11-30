import React, { useState, useContext } from "react";
import { Store, COST } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/choices.css";
export const MobileApplication = () => {
  const { state, dispatch } = useContext(Store);
  const [cost, setCost] = useState(0);
  const handleChange = e => {
    setCost(+e.target.value);
    dispatch({
      type: COST,
      payload: cost
    });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>what services do you need?</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="wireframe">UX Wireframing and Prototyping (700$)</label>
        <input
          className={styles.input}
          type="radio"
          name="mobile"
          id="wireframe"
          value="700"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="ui"> UI Design (700$)</label>
        <input
          className={styles.input}
          type="radio"
          name="mobile"
          id="ui"
          value="700"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="appDev">Application Development (1500$)</label>
        <input
          className={styles.input}
          type="radio"
          name="mobile"
          id="appDev"
          value="1500"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="bkDev">Backend Development (3000$)</label>
        <input
          className={styles.input}
          type="radio"
          name="mobile"
          id="bkDev"
          value="3000"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
    </div>
  );
};
