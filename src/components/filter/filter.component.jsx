import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre, resetFilters } from '../../actions';

function Filter() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.filters)

    return (
        <ul className="utils__filter">
            <li key="All" className="utils__filter-item" onClick={() => dispatch(resetFilters())}>All</li>
            {categories.map((v) => (
                <li key={v} className="utils__filter-item" onClick={() => dispatch(filterByGenre(v))}>
                    {v}
                </li>
            ))}
        </ul>
    );
}

export default Filter;
