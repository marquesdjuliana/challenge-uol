import "./styles.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div id="modal-container" onClick={onClose}>
      <div id="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button id="modal-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;
