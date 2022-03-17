import React, { useEffect, useState, useContext } from "react";
import MinContext from "../../Store/min-context";
import styles from "./Timer.module.css";

// TODO: return back the total time = 0 and a variable saying if start was clicked

function Timer(props) {
  // access context variables
  const ctx = useContext(MinContext);

  // Set timer amount
  const setTimer = (min) => {
    // Current Time
    let timerAmount = new Date();

    // Setting time to (current Time + given minutes)
    timerAmount.setMinutes(timerAmount.getMinutes() + min);
    return timerAmount;
  };

  // Timer amount state
  const [timeAmount, setTimeAmount] = useState();

  // Calculate the remaining time
  const remainingTime = () => {
    // Difference of future time - current time
    const total = +Date.parse(timeAmount) - +Date.parse(new Date());

    // Check if there is time left and assign values to object
    if (total > 0) {
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      return { total, minutes, seconds };
    }
    // If theres no time return values set to 0
    const seconds = 0;
    const minutes = 0;
    return { total, minutes, seconds };
  };

  // Remaining Time state
  const [time, setTime] = useState(remainingTime());

  // Reset Timer based on current flag
  const restTimer = () => {
    if (ctx.flag === 0) {
      setTimeAmount(setTimer(Number(ctx.pomodoroMin)));
      setTime(remainingTime());
    } else if (ctx.flag === 1) {
      setTimeAmount(setTimer(Number(ctx.breakMin)));
      setTime(remainingTime());
    }
  };

  // Updating remaining time every second until time is no longer changing
  useEffect(() => {
    setTimeout(() => {
      setTime(remainingTime());
    }, 1000);
  });

  // Handles onClick event to restart the timer.
  // Sets flag for pomodoro/break selector
  const clickHandler = () => {
    props.onFlag(ctx.flag);
    restTimer();
    if (ctx.flag === 0) {
      ctx.flag = 1;
    } else {
      ctx.flag = 0;
    }
  };

  return (
    <div className={styles.body}>
      <label className={styles.time}>
        {time.minutes > 9 ? time.minutes : "0" + time.minutes}:
        {time.seconds > 9 ? time.seconds : "0" + time.seconds}
      </label>
      <div className={styles.center}>
        <button className={styles.button} onClick={clickHandler}>
          Start
        </button>
        <button className={styles.button}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;
