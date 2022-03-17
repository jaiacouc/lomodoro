import Card from "../UI/Card";
import SelectPomodoro from "./SelectPomodoro";
import Timer from "./Timer";
import styles from "./Pomodoro.module.css";
import { useState } from "react";

// Component containing the timers and buttons for the pomodoro timer
function Pomodoro(props) {
  // Flag state for selector
  const [selectFlag, setSelectFlag] = useState(0);

  // Handles setting the flag state for the selector component
  const flagHandler = (flag) => {
    setSelectFlag(flag);
  };

  return (
    <Card className={styles.pomodoro}>
      <SelectPomodoro flag={selectFlag}></SelectPomodoro>
      <div>
        <Timer onFlag={flagHandler}></Timer>
      </div>
    </Card>
  );
}

export default Pomodoro;
