import React, { useEffect, useState } from "react";
import styles from "./SelectPomodoro.module.css";

const SelectPomodoro = (props) => {
  const [work, setWork] = useState("active");
  const [brk, setBrk] = useState("");

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
