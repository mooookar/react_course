import React from 'react';

import { render, screen } from '@testing-library/react';

// import '@babel/polyfill';

import Filter from './filter.component';
import { Provider } from 'react-redux';
import store from "../../store";

it('render filter snapshot', () => {
    const mockStore = {
        ...store,
        filters: ['All', "Filter1", "Filter2"],
        activeFilters: []
    }
    
    render(
        <Provider store={mockStore}>
            <Filter />
        </Provider>
    );
    expect(screen).toMatchSnapshot();
});
