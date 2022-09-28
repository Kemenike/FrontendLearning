import "./Modal.css"

function Modal({ confirm, cancel }) {
    return (
    <div>
    <div className="modal">
        <p className="modal__title">Are you sure?</p>
        <div className="modal__buttons">
        <button className="btn btn__cancel" onClick={cancel}>Cancel</button>
        <button className="btn" onClick={confirm}>Confirm</button>
        </div>
    </div>
    <div className="backdrop" />
    </div>
    );
}

export default Modal;