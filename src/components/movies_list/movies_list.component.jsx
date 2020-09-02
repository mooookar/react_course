import React, { useState, useEffect } from 'react';
import './movies_list.scss';

import Movie from './movie';
import Filter from '../filter';
import Sort from '../sort';

import useBreakpoints from '../../hooks/use-breakpoint';

const MoviesList = ({ movies, openModal, setMoviePreview }) => {
    const [moviesToRender, setMoviesToRender] = useState(movies);
    const linedLayout = useBreakpoints(1100);

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
            <div
                className={`movies-list__container movies-list__container${
                    linedLayout ? '--lined' : ''
                }`}
            >
                {moviesToRender.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        openModal={openModal}
                        setMoviePreview={setMoviePreview}
                    />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
