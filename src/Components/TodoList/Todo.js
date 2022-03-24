import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoStyling/Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState([
    { text: "Complete HW", id: "1" },
    { text: "Finish Program", id: "2" },
  ]);

  const addTodoHandler = (enteredText) => {
    setTodo((prev) => {
      const updatedTodo = [...prev];
      updatedTodo.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodo;
    });
  };

  const deleteHandler = (todoId) => {
    setTodo((prev) => {
      const updatedTodo = prev.filter((toDo) => toDo.id !== todoId);
      return updatedTodo;
    });
  };

  let content = <p className="message">No Goals Found, Add One!</p>;
  if (todo.length > 0) {
    content = <TodoList items={todo} onDeleteItem={deleteHandler} />;
  }

  return (
    <div>
      <section className="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section className="todo">{content}</section>
    </div>
  );
};

export default Todo;
