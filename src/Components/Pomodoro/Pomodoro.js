import Work from "./Work";
import Break from "./Break";
import Card from "../UI/Card";
import SelectPomodoro from "./SelectPomodoro";
import styles from "./Pomodoro.module.css";

function Pomodoro(props) {
  return (
    <Card className={styles.pomodoro}>
      <SelectPomodoro></SelectPomodoro>
      <Work timeMinutes={props.workMinutes}></Work>
      <Break timeMinutes={props.breakMinutes}></Break>
    </Card>
  );
}

export default Pomodoro;
