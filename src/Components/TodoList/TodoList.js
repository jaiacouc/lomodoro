import ListItem from "./ListItem";
import "./TodoStyling/TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((item) => (
        <ListItem key={item.id} id={item.id} onDelete={props.onDeleteItem}>
          {item.text}
        </ListItem>
      ))}
    </ul>
  );
};

export default TodoList;
