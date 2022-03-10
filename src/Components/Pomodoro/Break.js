import Timer from "./Timer";

function Break(props) {
  return (
    <div hidden={true}>
      <Timer timeMinutes={props.timeMinutes} />
    </div>
  );
}

export default Break;
