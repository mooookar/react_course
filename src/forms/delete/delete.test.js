import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

// import '@babel/polyfill';

import Delete from './delete.component';
import { Provider } from 'react-redux';
import store from '../../store';

it('render component snapshot', () => {
    render(
        <Provider store={store}>
            <Delete />
        </Provider>
    );
    expect(screen).toMatchSnapshot();
});

it('should call handleDelete handler and call Close function', ()=>{
    const mockClose = jest.fn()

    render(
        <Provider store={store}>
            <Delete close={mockClose}/>
        </Provider>
    );

    fireEvent.click(screen.getByText(/confirm/i))
    expect(mockClose).toHaveBeenCalled()
})
