import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoIcon(props) {
  const { iconColor } = React.useContext(TodoContext);

  return (
    <>
      {!!props.onComplete && <span className={`check-icon ${props.completed && "check-icon--active"}`} onClick={props.onComplete}></span>}
      {!!props.onDelete && <span className="remove-icon" onClick={props.onDelete}></span>}
    </>
  );
}

export { TodoIcon };