import React, { createRef } from 'react';
import './search.scss';

import Button from '../button';
import { useDispatch } from 'react-redux';
import { searchByValue, searchReset, resetFilters } from '../../actions';

function Search() {
    const ref = createRef();
    const dispatch = useDispatch()

    function handleSearch(e) {
        e.preventDefault();
        dispatch(resetFilters())
        dispatch(searchByValue(ref.current.value))
    }

    function clearInput() {
        dispatch(searchReset())
        
        ref.current.value = ''
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
