import { useState } from "react";
import styles from "./TodoStyling/TodoInput.module.css";

const TodoInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const todoChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Todo List</label>
        <input type="text" onChange={todoChangeHandler} />
      </div>
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
