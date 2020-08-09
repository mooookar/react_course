import React from 'react';

const sort_options = ['Release Date','Title']

function Sort() {
    return (
        <select className="utils__sort">
            {sort_options.map( v => <option key={v} value={v}>{v}</option> )}
        </select>
    );
}

export default Sort;
