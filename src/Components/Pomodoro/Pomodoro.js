import Card from "../UI/Card";
import SelectPomodoro from "./SelectPomodoro";
import Timer from "./Timer";
import styles from "./Pomodoro.module.css";
import { useState } from "react";

// Component containing the timers and buttons for the pomodoro timer
function Pomodoro(props) {
  // Set states
  const [time, setTime] = useState(props.workMinutes);
  const [flag, setFlag] = useState(2);

  // Handles work and break conditions by using even and odd flags
  const flagHandler = (flag) => {
    setFlag(flag);
    if (flag % 2 === 0) {
      setTime(props.workMinutes);
      console.log("work");
    } else {
      setTime(props.breakMinutes);
      console.log("break");
    }
  };

  return (
    <Card className={styles.pomodoro}>
      <SelectPomodoro turn={flag}></SelectPomodoro>
      <div>
        <Timer timeMinutes={time} onFlag={flagHandler} flag={flag}></Timer>
      </div>
    </Card>
  );
}

export default Pomodoro;
