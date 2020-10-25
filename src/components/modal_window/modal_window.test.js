import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import ModalWindow from './modal_window.component';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

test('modal shows the children and closes on overlay click', () => {
    const handleClose = jest.fn();

    const { getByText , getByTestId} = render(
        <ModalWindow close={handleClose} isOpen={true}>
            <div>test</div>
        </ModalWindow>
    );
    expect(getByText('test')).toBeTruthy();

    fireEvent.click(getByTestId(/modal-overlay/i));

    expect(handleClose).toHaveBeenCalledTimes(1);
});
