import React from "react";
import './CloseModalButton.css';

function CloseModalButton(props) {
  const onClickButton = () => {
    props.setOpenModal(false);
  };

  return (
    <button
      className="close-button"
      onClick={onClickButton}
    >
      -
    </button>
  );
}

export { CloseModalButton };