import React, { createRef, useState, useEffect } from 'react';
import './sort.scss';

const sort_options = ['Release Date', 'Title'];

const Sort = ({ sort }) => {
    const [label, setLabel] = useState('');
    const select = createRef();

    useEffect(() => {
        setLabel(select.current.value);
    }, []);

    function handleChange() {
        setLabel(select.current.value);
        sort(
            select.current.value == 'Release Date'
                ? 'year'
                : select.current.value
        );
    }

    return (
        <div className="utils__sort">
            <span className="utils__sort-value">{label.toUpperCase()}</span>
            <select
                className="utils__sort-select"
                ref={select}
                onChange={handleChange.bind(this)}
            >
                {sort_options.map((v) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Sort;
