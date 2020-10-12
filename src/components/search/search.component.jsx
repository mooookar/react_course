import React, { createRef } from 'react';
import './search.scss';

import Button from '../button';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../actions';
import { useHistory, useParams } from 'react-router';

function Search() {
    const ref = createRef();
    const dispatch = useDispatch()
    const history = useHistory()
    const {name} = useParams()

    function handleSearch(e) {
        e.preventDefault();
        dispatch(resetFilters())
        // dispatch(searchByValue(ref.current.value))

        history.push(`/search/${ref.current.value}`)
    }

    function clearInput() {
        ref.current.value = ''
        history.push('/')
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
