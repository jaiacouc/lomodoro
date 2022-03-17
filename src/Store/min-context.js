import React from "react";

// Context creation for the pomodoro and break minutes
// Also a flag to keep the state of the turn of the pomodoro break cycle
const MinContext = React.createContext({
  pomodoroMin: 45,
  breakMin: 15,
  flag: 0,
});

export default MinContext;
