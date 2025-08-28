import React from "react";

const ModalWindow = ({ isOpen, setIsOpen, children }) => {
    if (!isOpen) return null; // 👉 скрыт, пока isOpen = false

    return (
        <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h5 className="modal-title">Send me an Email</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
