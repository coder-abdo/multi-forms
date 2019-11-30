import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Aside } from "./components/Aside.jsx";
import { Home } from "./components/Home.jsx";
import styles from "./styles/app.css";
export const App = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Aside />
        <Home />
      </div>
    </>
  );
};
