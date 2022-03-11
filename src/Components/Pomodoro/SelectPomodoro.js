import React, { useEffect, useState } from "react";
import styles from "./SelectPomodoro.module.css";

// Component to indicate the status of work or break
const SelectPomodoro = (props) => {
  // Sets States
  const [work, setWork] = useState("active");
  const [brk, setBrk] = useState("");

  // Manages highlighting of buttons to indicate wheather the user is working or on break
  // Leveraging dynamic css styling
  useEffect(() => {
    if (props.turn % 2 != 0) {
      setWork("active");
      setBrk("");
    } else {
      setBrk("active");
      setWork("");
    }
  }, [props.turn]);

  return (
    <div className={styles.body}>
      <button className={styles[`btn-${work}`]}>Pomodoro</button>
      <button className={styles[`btn-${brk}`]}>Break</button>
    </div>
  );
};

export default SelectPomodoro;
