import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style.scss';
import App from './app.jsx';
import store from './store.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
