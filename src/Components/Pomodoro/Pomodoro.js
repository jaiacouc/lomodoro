import Card from "../UI/Card";
import SelectPomodoro from "./SelectPomodoro";
import Timer from "./Timer";
import styles from "./Pomodoro.module.css";
import { useState } from "react";

function Pomodoro(props) {
  const [time, setTime] = useState(props.workMinutes);
  const [flag, setFlag] = useState(2);

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
