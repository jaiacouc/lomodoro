import React from "react";
import styles from "./Settings.module.css";
import SettingsForum from "./SettingsForum";

const Settings = (props) => {
  return (
    <React.Fragment>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Settings</button>
      </div>
      <SettingsForum />
    </React.Fragment>
  );
};

export default Settings;
