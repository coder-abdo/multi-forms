import React, { useContext, useState } from "react";
import { Store, USER_DETAILS, SET_ERRORS } from "../Store.js";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/contact.css";
export const StageThree = () => {
  const { state, dispatch } = useContext(Store);
  let user;
  if (state.user) {
    user = state.user;
  }
  const [name, setName] = useState(user ? user.name : "");
  const [tel, setTel] = useState(user ? user.tel : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [inputType, setInputType] = useState("tel");
  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: USER_DETAILS,
      payload: {
        name,
        tel,
        email,
        inputType
      }
    });
  };
  const handleInputChange = e => {
    setInputType(e.target.value);
  };
  const showInputDetail = inputType => {
    if (inputType === "tel") {
      return (
        <input
          type="tel"
          value={tel}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="must be like this 000-00-000 ex: 111-22-333"
          onChange={e => setTel(e.target.value)}
          required
          className={styles.tel}
        />
      );
    } else if (inputType === "email") {
      return (
        <input
          type="email"
          value={email}
          pattern="(\w.+)@[a-z]+\.[a-z]{2,4}"
          placeholder="Enter Your Email ex: example@example.com"
          onChange={e => setEmail(e.target.value)}
          className={styles.email}
        />
      );
    } else {
      return;
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Enter Your Details below</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.parent}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            pattern="^[a-zA-Z0-9].{3,}"
            onChange={e => setName(e.target.value)}
            required
            className={styles.name}
          />
        </div>
        <div>
          <div className={styles.inputContainer}>
            <label htmlFor="tel">tel:</label>
            <input
              type="radio"
              name="contact"
              id="tel"
              onChange={handleInputChange}
              value="tel"
              className={styles.input}
            />
            <FaCheckCircle className={styles.icon} />
            <label htmlFor="email">email:</label>
            <input
              type="radio"
              name="contact"
              value="email"
              id="email"
              onChange={handleInputChange}
              className={styles.input}
            />
            <FaCheckCircle className={styles.icon} />
          </div>
          <div>{showInputDetail(inputType)}</div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};
