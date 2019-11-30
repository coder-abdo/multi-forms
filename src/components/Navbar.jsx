import React from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import styles from "../styles/nav.css";
export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <form>
        <div className={styles.inputContainer}>
          <FaSearch className={styles.searchIcon} />
          <FaAngleDown className={styles.dropdownIcon} />
          <input type="text" placeholder="Find" className={styles.input} />
        </div>
      </form>
      <ul className={styles.listContainer}>
        <li className={styles.list}>jobs</li>
        <li className={styles.list}>saved</li>
        <li className={styles.list}>reports</li>
        <li className={styles.list}>messages</li>
      </ul>
      <div className={styles.bellIcon}>
        <FiBell />
      </div>
      <div className={styles.user}>
        <MdPerson />
      </div>
    </nav>
  );
};
