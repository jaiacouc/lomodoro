import styles from "./App.module.css";
import Pomodoro from "./Components/Pomodoro/Pomodoro";
import Header from "./Components/Layout/Header";
import React from "react";
import MinContext from "./Store/min-context";

function App() {
  return (
    <MinContext.Provider value={{ pomodoroMin: 45, breakMin: 15, flag: 0 }}>
      <Header />
      <div className={styles.pomodoro}>
        <Pomodoro />
      </div>
    </MinContext.Provider>
  );
}

export default App;
