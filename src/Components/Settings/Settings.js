import React from "react";
import styles from "./Settings.module.css";
import SettingsModal from "../UI/SettingsModal";

const Settings = (props) => {
  return (
    <React.Fragment>
      <div className={styles.btnContainer}>
        <button
          type="button"
          class="btn btn-sm"
          className={styles.btn}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Settings
        </button>
      </div>
      <SettingsModal />
    </React.Fragment>
  );
};

export default Settings;
