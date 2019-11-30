import React, { useContext } from "react";
import {
  FaRegFileAlt,
  FaSearchDollar,
  FaRegAddressCard,
  FaDollarSign,
  FaCheck,
  FaCheckCircle
} from "react-icons/fa";
import styles from "../styles/aside.css";
import { Store, STAGE_ONE } from "../Store.js";
export const Aside = () => {
  const { state } = useContext(Store);
  return (
    <aside className={styles.aside}>
      <ul>
        <li
          className={`${state.step === 0 ? styles.active : null} ${
            styles.listItem
          }`}
        >
          <FaRegFileAlt />
          <span>Description</span>
          <FaCheckCircle
            style={{
              color: state.isCompleted ? "var(--green)" : "var(--dark-grey)"
            }}
          />
        </li>
        <li
          className={`${
            state.isCompleted && state.step === 1 ? styles.active : null
          } ${styles.listItem}`}
        >
          <FaSearchDollar />
          <span>Step Two</span>
          <FaCheckCircle
            style={{
              color:
                state.isCompleted && state.step === 1
                  ? "var(--green)"
                  : "var(--dark-grey)"
            }}
          />
        </li>
        <li
          className={`${
            state.isCompleted && state.step === 2 ? styles.active : null
          } ${styles.listItem}`}
        >
          <FaDollarSign />
          <span>Step Three</span>
          <FaCheckCircle
            style={{
              color:
                state.isCompleted && state.step === 2
                  ? "var(--green)"
                  : "var(--dark-grey)"
            }}
          />
        </li>
        <li
          className={`${state.step === 2 ? styles.active : null} ${
            styles.listItem
          }`}
        >
          <FaCheck
            style={{
              color:
                state.isCompleted && state.step === 3
                  ? "var(--green)"
                  : "var(--dark-grey)"
            }}
          />
          <span>Review</span>
        </li>
      </ul>
    </aside>
  );
};
