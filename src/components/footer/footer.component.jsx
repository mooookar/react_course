import React from 'react';
import propTypes from 'prop-types';
import './footer.scss';
import Logo from '../logo';

function Footer() {
    return (
        <div className="footer">
            <Logo />
        </div>
    )
}

Footer.propTypes = {
    children: propTypes.node
};

export default Footer;
