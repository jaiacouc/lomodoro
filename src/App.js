import "./App.css";
import Timer from "./Components/Pomodoro/Timer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div>Lomodoro</div>
      <Timer timeMinutes={45} />
    </React.Fragment>
  );
}

export default App;
