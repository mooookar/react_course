import React from 'react';

import Button from '../button';

function Search() {
    return (
        <div className="search">
            <h2 className="search__title">Find your movie</h2>
            <input
                className="search__input"
                type="text"
                placeholder="What do you want to watch?"
            ></input>
            <Button classname="search__button" text="Search" />
        </div>
    );
}

export default Search;
