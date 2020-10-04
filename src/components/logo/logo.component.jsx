import React from 'react';
import './logo.scss';
import { useHistory } from 'react-router';

function Logo() {
    const history = useHistory()

    function backToHome (){
        history.push('/')
    }

    return (
        <div className="logo" onClick={backToHome}>
            <b className="bold">netflix</b>roulette
        </div>
    );
}

export default Logo;
