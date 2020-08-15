import React from 'react';
import './search.scss';

import Button from '../button';

function Search() {
    return (
        <form className="search">
            <h2 className="search__title">Find your movie</h2>
            <input
                className="search__input"
                type="text"
                placeholder="What do you want to watch?"
            ></input>
            <Button type="submit" classname="search__button" text="Search" />
        </form>
    );
}

export default Search;
