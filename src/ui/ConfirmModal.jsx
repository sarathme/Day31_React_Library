import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function ConfirmModal({ heading, onClose, children, onConfirm }) {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <div className="modal__header">
          <h3>{heading.toUpperCase()}</h3>
          <button onClick={onClose}>
            <HiXMark />
          </button>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <button onClick={onClose} className="cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="confirm">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmModal;
