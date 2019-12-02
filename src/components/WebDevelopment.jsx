import React, { useContext } from "react";
import { Store, ADD_SERVICES, REMOVE_SERVICES } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/choices.css";
export const WebDevelopment = () => {
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
  const labels = [
    {
      id: "uxWireWeb",
      text: " UX Wireframing and Prototyping (500$)",
      value: 500
    },
    {
      id: "uiDesignWeb",
      text: "UI Design (1000$)",
      value: 1000
    },
    {
      id: "uiDevelopmentWeb",
      text: "UI Development (1000$)",
      value: 1000
    },
    {
      id: "frontDevelopment",
      text: "Frontend Development (2000$)",
      value: 2000
    },
    {
      id: "backDevelopmentWeb",
      text: " Backend Development (2000$)",
      value: 2000
    }
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>what services do you need?</h2>
      {labels.map(label => (
        <div className={styles.inputContainer}>
          <label htmlFor={label.id}>{label.text}</label>
          <input
            type="checkbox"
            id={label.id}
            className={styles.input}
            onChange={handleChange}
            value={label.value}
            checked={state.services.find(service => service.id === label.id)}
          />
          <FaCheckCircle className={styles.icon} />
        </div>
      ))}

      {/* <div className={styles.inputContainer}>
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
      </div> */}
    </div>
  );
};
