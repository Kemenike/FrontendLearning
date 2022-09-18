import "./Modal.css"

function Modal() {
    return (
    <div>
    <div className="modal">
        <p className="modal__title">Are you sure?</p>
        <div className="modal__buttons">
        <button className="btn btn__cancel" onClick={(event) => {
            console.log('Canceled');
        }}>Cancel</button>
        <button className="btn" onClick={(event) => {
            console.log('Confirmed');
        }}>Confirm</button>
        </div>
    </div>
    <div className="backdrop" />
    </div>
    );
}

export default Modal;