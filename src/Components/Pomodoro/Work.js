import Timer from "./Timer";

function Work(props) {
  return (
    <div hidden={false}>
      <Timer timeMinutes={props.timeMinutes} />
    </div>
  );
}

export default Work;
