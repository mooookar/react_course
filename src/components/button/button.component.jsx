import React from 'react';
import propTypes from 'prop-types';
import './button.scss';

function Button({type, text, classname}) {
    return (
        <button type={type} className={classname}>{text}</button>
    )
}

Button.propTypes = {
    type: propTypes.string,
    text: propTypes.string.isRequired,
    classname: propTypes.string.isRequired
};

export default Button;
