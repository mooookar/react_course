import React from "react";
import { render, screen } from '@testing-library/react';

import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";

import store from "../store";
import App from "../app";

import mock_movies from "../mock_movies";

import '@babel/polyfill';



it('app test', async ()=>{
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                data: mock_movies,
                json: function () {
                    return { data: mock_movies};
                },
            });
        });
        return p;
    });

    render(
        <MemoryRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    )
})