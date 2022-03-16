import styles from "./App.module.css";
import Pomodoro from "./Components/Pomodoro/Pomodoro";
import Header from "./Components/Layout/Header";
import React from "react";
import SettingsForum from "./Components/Settings/SettingsForum";
import Modal from "./Components/UI/Modal";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.pomodoro}>
        <Pomodoro workMinutes={45} breakMinutes={15} />
      </div>
    </React.Fragment>
  );
}

export default App;
