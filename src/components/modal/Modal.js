import './Modal.css'
import  ReactDOM  from 'react-dom';
import { useRef } from 'react';

function Modal(props) {

    const modalRef = useRef();

    const closeModal = e => {
        if(modalRef.current === e.target){
            props.onClose();
        }
    }

    if(!props.isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
            <div className="modal-container">
                <div className="modal-header">
                    <span className="modal-header-text">{props.header}</span>
                    <span onClick={props.onClose} className="close-button unselectable">X</span>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <div clasName="modal-footer-text">
                        {props.footer}
                    </div>
                    <div clasName="modal-footer-buttons">
                        <span onClick={props.onClose} className="button-cancel">Cerrar</span>
                        <span onClick={props.onClose} className="button-confirm">Confirmar</span>
                    </div>

                </div>
            </div>
        </div>
    , document.getElementById("modalPortal"));
}

export default Modal;