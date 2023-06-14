
import { Fragment } from "react"
import classes from "./Modal.module.css"
import { createPortal } from "react-dom"


const BackDrop = props => {

    return <div className={classes.backdrop} onClick={props.onCloseModal}/>

}
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return(
        <Fragment>
            {createPortal(<BackDrop onCloseModal={props.onCloseModal}/>, portalElement)}    
            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement)}    
        </Fragment>
    );
};

export default Modal;