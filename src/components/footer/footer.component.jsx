import React from 'react';
import propTypes from 'prop-types';
import './footer.scss';

function Footer({children}) {
    return (
        <div className="footer">
            {children}
        </div>
    )
}

Footer.propTypes = {
    children: propTypes.node
};

export default Footer;
