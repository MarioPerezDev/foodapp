import './Modal.css'
import  ReactDOM  from 'react-dom';

function Modal(props) {
    if(!props.isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <span className="modal-header-text">{props.header}</span>
                    <span onClick={props.onClose} className="close-button unselectable">X</span>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <div className="modal-footer-text">
                        {props.footer}
                    </div>
                </div>
            </div>
        </div>
    , document.getElementById("modalPortal"));
}

export default Modal;