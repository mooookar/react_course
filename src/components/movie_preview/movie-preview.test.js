import React from 'react';

import { render, screen } from '@testing-library/react';

// import '@babel/polyfill';

import MoviePreview from './movie_preview.component';
import { Provider } from 'react-redux';
import store from '../../store';
import { MemoryRouter } from 'react-router';

it('rendered button snapshot', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <MoviePreview />
            </Provider>
        </MemoryRouter>
    );
    expect(screen).toMatchSnapshot();
});
