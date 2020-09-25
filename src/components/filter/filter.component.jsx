import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setActiveFilters } from '../../actions';

function Filter() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.filters)
    const activeFilters = useSelector(state => state.activeFilters)

    return (
        <ul className="utils__filter">
            <li key="All" className={`utils__filter-item ${activeFilters.includes('All') ? 'selected' : ''}`} onClick={() => dispatch(resetFilters())}>All</li>
            {categories.map((v) => (
                <li key={v} className={`utils__filter-item ${activeFilters.includes(v) ? 'selected' : ''}`} onClick={() => dispatch(setActiveFilters(v))}>
                    {v}
                </li>
            ))}
        </ul>
    );
}

export default Filter;
