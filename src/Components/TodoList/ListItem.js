import "./TodoStyling/ListItem.css";

const ListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default ListItem;
