import React from 'react';

import { render, screen } from '@testing-library/react';

import Edit from './edit.component';
import { Provider } from 'react-redux';
import store from "../../store";

it('should render a form', () => {
    const movie = {
        id: 535281, 
        title: "Avengers", 
        release_date: "2015", 
        genres: ['horror', 'crime'], 
        poster_path: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        url: 'www.avengers.com',
        overview: "Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster which is formed by Loki and his team",
        runtime: 135
    }

    render(
        <Provider store={store}>
            <Edit movie={movie}/>
        </Provider>
    );

    expect(screen).toMatchSnapshot()
});
