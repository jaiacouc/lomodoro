import React from "react";
import styles from "./Header.module.css";
import alarm from "../../Assets/alarm.svg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles["main-image"]}>
          <img src={alarm} alt="Alarm"></img>
        </div>
        <h1>Lomodoro</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
