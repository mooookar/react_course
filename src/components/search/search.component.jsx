import React, { createRef } from 'react';
import './search.scss';

import Button from '../button';

function Search({ searchMovie }) {
    const ref = createRef();

    function handleSearch(e) {
        e.preventDefault();
        searchMovie(ref.current.value);
    }

    function clearInput() {
        searchMovie(ref.current.value = '');
    }

    return (
        <form className="search" onSubmit={handleSearch}>
            <h2 className="search__title">Find your movie</h2>
            <div className="search__input-container">
                <input
                    ref={ref}
                    className="search__input"
                    type="text"
                    placeholder="What do you want to watch?"
                ></input>
                <div className="search__clear" onClick={clearInput}></div>
            </div>
            <Button type="submit" classname="primary" text="Search" />
        </form>
    );
}

export default Search;
