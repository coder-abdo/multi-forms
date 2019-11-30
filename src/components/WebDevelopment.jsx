import React, { useState, useContext } from "react";
import { Store, COST } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/choices.css";
export const WebDevelopment = () => {
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
        <label htmlFor="wireframe">UX Wireframing and Prototyping (500$)</label>
        <input
          className={styles.input}
          type="radio"
          name="web"
          id="wireframe"
          value="500"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="ui"> UI Design (1000$)</label>
        <input
          className={styles.input}
          type="radio"
          name="web"
          id="ui"
          value="1000"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="uiDev">UI Development (1000$)</label>
        <input
          className={styles.input}
          type="radio"
          name="web"
          id="uiDev"
          value="1000"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="frDev">Frontend Development (2000$)</label>
        <input
          className={styles.input}
          type="radio"
          name="web"
          id="frDev"
          value="2000"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="bkDev">Backend Development (2000$)</label>
        <input
          className={styles.input}
          type="radio"
          name="web"
          id="bkDev"
          value="2000"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
    </div>
  );
};
