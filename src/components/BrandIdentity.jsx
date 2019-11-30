import React, { useState, useContext } from "react";
import { Store, COST } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/choices.css";
export const BrandIdentity = () => {
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
        <label htmlFor="logo">Logo (100$)</label>
        <input
          className={styles.input}
          type="radio"
          name="brand"
          id="logo"
          value="100"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="brochure"> Brochures (70$)</label>
        <input
          className={styles.input}
          type="radio"
          name="brand"
          id="brochure"
          value="70"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="envelope"> Envelopes (30$)</label>
        <input
          className={styles.input}
          type="radio"
          name="brand"
          id="envelope"
          value="30"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="letterHead"> leaterhead (20$)</label>
        <input
          className={styles.input}
          type="radio"
          name="brand"
          id="letterHead"
          value="20"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="buisnessCard"> Business Cards (50$)</label>
        <input
          className={styles.input}
          type="radio"
          name="brand"
          id="buisnessCard"
          value="50"
          onChange={handleChange}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
    </div>
  );
};
