import React from 'react';

import { render, screen } from '@testing-library/react';

import Add from './add.component';
import { Provider } from 'react-redux';
import store from '../../store';


it('should render a form', () => {
    render(
        <Provider store={store}>
            <Add />
        </Provider>
    );

    expect(screen.getByTestId("title"))
    expect(screen.getByTestId("release_date"))
    expect(screen.getByTestId("url"))
    expect(screen.getByTestId("genres"))
    expect(screen.getByTestId("overview"))
    expect(screen.getByTestId("runtime"))
});

