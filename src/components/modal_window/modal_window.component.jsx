import React from 'react';
import { createPortal } from 'react-dom';

import './modal_window.scss';

function ModalWindow(props) {
    const { isOpen, close,  children } = props;

    if (isOpen) {
        return createPortal(
            <div className="modal-container">
                {children}
                <div className="modal-overlay" onClick={close}/>
            </div>,
            document.getElementById('modal-root')
        );
    }

    return null;
}

export default ModalWindow;
