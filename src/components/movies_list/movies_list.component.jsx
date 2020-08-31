import React, { useState, useEffect } from 'react';
import './movies_list.scss';

import Movie from './movie';
import Filter from '../filter';
import Sort from '../sort';

const MoviesList = ({ movies, openModal }) => {
    const [moviesToRender, setMoviesToRender] = useState(movies);

    useEffect(() => {
        setMoviesToRender(movies);
    }, [movies]);

    function filter(value) {
        let filterByValue = value.toLowerCase();

        if (filterByValue == 'all') {
            setMoviesToRender(movies);
            return;
        }

        setMoviesToRender(
            movies.filter((movie) => {
                return movie.genres.includes(filterByValue);
            })
        );
    }

    function sort(value) {
        let comparator = value.toLowerCase();

        setMoviesToRender((prev) =>
            [...prev].sort((a, b) => {
                if (a[comparator] > b[comparator]) {
                    return 1;
                }
                if (a[comparator] < b[comparator]) {
                    return -1;
                }
                return 0;
            })
        );
    }

    return (
        <div className="movies-list">
            <div className="utils">
                <Filter filter={filter} />
                <Sort sort={sort} />
            </div>
            <div className="counter">{moviesToRender.length} movies found</div>
            <div className="movies-list__container">
                {moviesToRender.map((movie) => (
                    <Movie key={movie.id} movie={movie} openModal={openModal} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
