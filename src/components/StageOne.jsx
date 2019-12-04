import React, { useContext, useState } from "react";
import { Store, TYPE } from "../Store";
import { MdFingerprint, MdDashboard } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import styles from "../styles/stage-one.css";
export const StageOne = () => {
  const [type, setType] = useState("");
  const { state, dispatch } = useContext(Store);

  const types = [
    {
      text: "brand identity",
      icon: <MdFingerprint />
    },
    {
      text: "mobile application",
      icon: <FaRegListAlt />
    },
    {
      text: "web development",
      icon: <MdDashboard />
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <h2>whate type of project do you have?</h2>
        <ul className={styles.list}>
          {types.map((type, index) => (
            <li
              key={index}
              className={`${
                state.projectType === type.text ? styles.active : null
              } ${styles.listItem}`}
              onClick={() => dispatch({ type: TYPE, payload: type.text })}
            >
              {type.icon}
              <h4>{type.text}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
