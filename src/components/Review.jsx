import React, { useContext } from "react";
import { Store } from "../Store.js";
import styles from "../styles/review.css";
export const Review = () => {
  const {
    state: {
      services,
      projectType,
      user: { name, email, tel }
    }
  } = useContext(Store);
  const sum = arr => arr.reduce((prev, next) => prev + parseInt(next.val), 0);
  console.log(services);
  return (
    <div>
      <h2 className={styles.mainTitle}>your purchase</h2>
      <div className={styles.user}>
        <h3 className={styles.detail}>name: {name}</h3>
        <h3 className={styles.detail}>contact way : {tel ? tel : email}</h3>
        <h3 className={styles.detail}>project type : {projectType}</h3>
        <h3 className={styles.detail}>price: {sum(services)} $</h3>
      </div>
    </div>
  );
};
