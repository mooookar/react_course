import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

const root = document.createElement('div')
root.setAttribute('id', 'root')
    
ReactDOM.render(<App />, document.getElementById('root'));
