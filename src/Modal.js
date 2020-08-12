import React from "react";
import "./Modal.css";
import ModalContent from "./ModalContent.js";


  const Modal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
        <React.Fragment>
          <div className="Modal-overlay" onClick={close} />
         
            <ModalContent close={close} />
          
        </React.Fragment>
        :
        null
      }
    </React.Fragment>
    );
  }

  export default Modal;