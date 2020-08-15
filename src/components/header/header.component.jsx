import React from 'react';
import propTypes from 'prop-types';
import './header.scss';

function Header({children}) {
    return (
        <div className="header">
            {children}
        </div>
    )
}

Header.propTypes = {
    children: propTypes.node
};

export default Header;
