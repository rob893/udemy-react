function Modal({ onCancel, onConfirm }: { onCancel?: () => void; onConfirm?: () => void }) {
  function cancelHandler() {
    if (onCancel) {
      onCancel();
    }
  }

  function confirmHandler() {
    if (onConfirm) {
      onConfirm();
    }
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
