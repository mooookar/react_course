import React, { createRef, useState, useEffect } from 'react';
import './sort.scss';
import { sortByValue } from '../../actions';
import { useDispatch } from 'react-redux';

const sort_options = ['Release Date', 'Title', 'Rating'];

const Sort = () => {
    const [label, setLabel] = useState('');
    const select = createRef();
    const dispatch = useDispatch();

    useEffect(() => {
        setLabel(select.current.value);
    }, []);

    function handleChange() {
        setLabel(select.current.value);

        if(select.current.value == 'Release Date'){
            dispatch(sortByValue('release_date'))
        } else if (select.current.value == 'Title'){
            dispatch(sortByValue('title'))
        } else if (select.current.value == 'Rating'){
            dispatch(sortByValue('vote_average'))
        }
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
