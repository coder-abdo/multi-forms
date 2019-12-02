import React, { useContext } from "react";
import { Store, ADD_SERVICES, REMOVE_SERVICES } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/choices.css";
export const BrandIdentity = () => {
  const labels = [
    {
      id: "logo",
      text: "logo (100$)",
      value: 100
    },
    {
      id: "brochure",
      text: "brochure (70$)",
      value: 70
    },
    {
      id: "envelope",
      text: "envelope (30$)",
      value: 30
    },
    {
      id: "letterHeade",
      text: "letter heade (20$)",
      value: 20
    },
    {
      id: "businessCard",
      text: "business card (50$)",
      value: 50
    }
  ];
  const { state, dispatch } = useContext(Store);
  const handleChange = e => {
    if (e.target.checked) {
      dispatch({
        type: ADD_SERVICES,
        payload: { id: e.target.id, val: e.target.value }
      });
    } else {
      dispatch({ type: REMOVE_SERVICES, payload: e.target.id });
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>what services do you need?</h2>
      <>
        {labels.map(label => (
          <div key={label.id} className={styles.inputContainer}>
            <label htmlFor={label.id}>{label.text}</label>
            <input
              type="checkbox"
              name="brand"
              className={styles.input}
              onChange={handleChange}
              id={label.id}
              value={label.value}
              checked={state.services.find(service => service.id === label.id)}
            />
            <FaCheckCircle className={styles.icon} />
          </div>
        ))}
      </>
      {/* <div className={styles.inputContainer}>
        <label htmlFor="logo">Logo (100$)</label>
        <input
          className={styles.input}
          type="checkbox"
          id="logo"
          value="100"
          checked={state.brandCoices.has("logo")}
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="brochure"> Brochures (70$)</label>
        <input
          className={styles.input}
          type="checkbox"
          id="brochure"
          value="70"
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="envelope"> Envelopes (30$)</label>
        <input
          className={styles.input}
          type="checkbox"
          id="envelope"
          value="30"
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="letterHead"> leaterhead (20$)</label>
        <input
          className={styles.input}
          type="checkbox"
          id="letterHead"
          value="20"
        />
        <FaCheckCircle className={styles.icon} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="buisnessCard"> Business Cards (50$)</label>
        <input
          className={styles.input}
          type="checkbox"
          id="buisnessCard"
          value="50"
        />
        <FaCheckCircle className={styles.icon} />
      </div> */}
    </div>
  );
};
