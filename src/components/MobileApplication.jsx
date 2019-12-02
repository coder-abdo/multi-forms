import React, { useContext } from "react";
import { Store, ADD_SERVICES, REMOVE_SERVICES } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/choices.css";
export const MobileApplication = () => {
  const { state, dispatch } = useContext(Store);
  const labels = [
    {
      id: "uxWirePrototype",
      text: "UX Wireframing and Prototyping (700$)",
      value: 700
    },
    {
      id: "uiDesign",
      text: "UI Design (700$)",
      value: 700
    },
    {
      id: "appDevelopment",
      text: "Application Development (1500$)",
      value: 1500
    },
    {
      id: "mobBackDevelopment",
      text: "Backend Development (3000$)",
      value: 3000
    }
  ];
  const handleChange = e => {
    console.log("yes");
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
      {labels.map(label => (
        <div className={styles.inputContainer}>
          <label htmlFor={label.id}>{label.text}</label>
          <input
            type="checkbox"
            value={label.value}
            id={label.id}
            className={styles.input}
            onChange={handleChange}
            checked={state.services.find(service => service.id === label.id)}
          />
          <FaCheckCircle className={styles.icon} />
        </div>
      ))}
    </div>
  );
};
