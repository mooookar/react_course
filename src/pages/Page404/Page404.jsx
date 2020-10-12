import React from 'react';
import { Link } from 'react-router-dom';

import './404.scss';

export default function Error404Page() {
    return (
        <div className="error-page header">
            <h1 data-text="404">404</h1>
            <Link to='/'>go back</Link>
        </div>
    )
}
