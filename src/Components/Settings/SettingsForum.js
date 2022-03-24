import React, { useContext } from "react";
import MinContext from "../../Store/min-context";

const SettingsForum = (props) => {
  const ctx = useContext(MinContext);

  // Handles the change of the pomodoro minutes field
  // Sets the new minutes to the app wide state through context
  const handlePomoChange = (e) => {
    ctx.pomodoroMin = e.target.value;
  };

  // Handles the change of break minutes
  // sets the new break minutes state
  const handleBreakChange = (e) => {
    ctx.breakMin = e.target.value;
  };

  return (
    <React.Fragment>
      <div class="mb-3">
        <label for="pomodoro" class="form-label">
          Pomodoro
        </label>
        <input
          type="number"
          class="form-control"
          id="pomodoro"
          placeholder={ctx.pomodoroMin}
          onChange={handlePomoChange}
        ></input>
      </div>
      <div class="mb-3">
        <label for="break" class="form-label">
          Break
        </label>
        <input
          type="number"
          class="form-control"
          id="break"
          placeholder={ctx.breakMin}
          onChange={handleBreakChange}
        ></input>
      </div>
    </React.Fragment>
  );
};

export default SettingsForum;
