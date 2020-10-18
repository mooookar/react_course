import React from 'react';

import { render, screen } from '@testing-library/react';

import BackToSearch from './back_to_search.component';

it('render a BackToSearch link', () => {
    render(
        <BackToSearch />
    );
    expect(screen.getByTitle("Back to Search"));
});
