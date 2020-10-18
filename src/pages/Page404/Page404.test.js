import React from 'react';

import { render, screen } from '@testing-library/react';

import Page404 from './Page404';
import { MemoryRouter } from 'react-router';

it('render 404 page', () => {
    render(
        <MemoryRouter>
            <Page404 />
        </MemoryRouter>
    );
    expect(screen.getByText('404'));
});
