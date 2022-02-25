import React from "react";

function TodoIcon({ onComplete, onDelete, completed }) {

  return (
    <>
      {!!onComplete && <span className={`check-icon ${completed && "check-icon--active"}`} onClick={onComplete}></span>}
      {!!onDelete && <span className="remove-icon" onClick={onDelete}></span>}
    </>
  );
}

export { TodoIcon };