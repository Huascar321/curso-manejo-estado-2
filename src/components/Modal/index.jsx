import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { CloseModalButton } from "../CloseModalButton";

function Modal({ children, setOpenModal }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
      <CloseModalButton setOpenModal={setOpenModal}/>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };