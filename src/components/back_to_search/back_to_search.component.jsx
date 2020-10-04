import React from 'react';
import { useHistory } from 'react-router';

const BackToSearch = () => {
    const history = useHistory()

    function backToHome(){
        history.push('/')
    }

    return (
    <button className="back-to-search" onClick={backToHome} title="Back to Search">
    </button>
)};

export default BackToSearch;
