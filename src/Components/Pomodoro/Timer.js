import React, { useEffect, useState } from "react";

// TODO: Add condition for when total hits 0 the timer stops

function Timer(props) {
  // Set timer amount
  const setTimer = (min) => {
    let timerAmount = new Date();

    timerAmount.setMinutes(timerAmount.getMinutes() + min);
    return timerAmount;
  };

  // Timer amount state
  const [timeAmount, setTimeAmount] = useState(setTimer(props.timeMinutes));

  // Calculate the remaining time
  const remainingTime = () => {
    const total = +Date.parse(timeAmount) - +Date.parse(new Date());

    if (total > 0) {
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      return { total, minutes, seconds };
    }
    return 0;
  };

  // Remaining Time state
  const [time, setTime] = useState(remainingTime());

  // Updating remaining time every second
  useEffect(() => {
    setTimeout(() => {
      setTime(remainingTime());
    }, 1000);
  });

  return (
    <div>
      {time.minutes}:{time.seconds}
    </div>
  );
}

export default Timer;
