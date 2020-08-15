import React from 'react';

const categories = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function Filter() {
    return (
        <ul className="utils__filter">
            {categories.map( (v,i) => <li key={i} className="utils__filter-item">{v}</li>)}
        </ul>
    );
}

export default Filter;
