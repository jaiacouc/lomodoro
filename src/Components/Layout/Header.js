import React from "react";
import styles from "./Header.module.css";
import alarm from "../../Assets/alarm.svg";
import Settings from "../Settings/Settings";

// Header component for the top of the page
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles["main-image"]}>
          <img src={alarm} alt="Alarm"></img>
        </div>
        <h1 className={styles.title}>Lomodoro</h1>
      </header>
      <Settings />
    </React.Fragment>
  );
};

export default Header;
