import React from 'react';
import propTypes from 'prop-types';
import './button.scss';

function Button({type, text, classname, clickHandler}) {
    return (
        <button type={type} className={classname} onClick={clickHandler}>{text}</button>
    )
}

Button.propTypes = {
    type: propTypes.string,
    text: propTypes.string.isRequired,
    classname: propTypes.string.isRequired,
    clickHandler: propTypes.func
};

export default Button;
