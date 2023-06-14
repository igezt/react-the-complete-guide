import React from "react";

import "./Modal.css";
import { CSSTransition, Transition } from "react-transition-group";

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose",
      }}
    >
      {(state) => (
        <div className="Modal">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      )}
    </CSSTransition>
  );
};

export default modal;
