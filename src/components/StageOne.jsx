import React, { useContext, useState } from "react";
import {
  Store,
  MOBILE_APPLICATION,
  BRAND_IDENTITY,
  WEB_DEVELOPMENT
} from "../Store";
import { MdFingerprint, MdDashboard } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import styles from "../styles/stage-one.css";
export const StageOne = () => {
  const [feature, setfeature] = useState("BRAND_IDENTITY");
  const { state, dispatch } = useContext(Store);
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <h2>whate type of project do you have?</h2>
        <ul className={styles.list}>
          <li
            onClick={() => dispatch({ type: BRAND_IDENTITY })}
            className={`${
              state.services === "brandIdentity" ? styles.active : null
            } ${styles.listItem}`}
          >
            <MdFingerprint />
            <h4>Brand Identity</h4>
          </li>
          <li
            onClick={() => dispatch({ type: MOBILE_APPLICATION })}
            className={`${
              state.services === "mobileApplication" ? styles.active : null
            } ${styles.listItem}`}
          >
            <FaRegListAlt />
            <h4>Mobile Application</h4>
          </li>
          <li
            onClick={() => dispatch({ type: WEB_DEVELOPMENT })}
            className={`${
              state.services === "webDevelopment" ? styles.active : null
            } ${styles.listItem}`}
          >
            <MdDashboard />
            <h4>Web Development</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};
