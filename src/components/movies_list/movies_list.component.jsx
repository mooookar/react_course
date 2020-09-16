import React from 'react';
import './movies_list.scss';

import Movie from './movie';
import Filter from '../filter';
import Sort from '../sort';

import useBreakpoints from '../../hooks/use-breakpoint';
import { useSelector } from 'react-redux';

const MoviesList = ({ openModal, setMoviePreview }) => {
    const moviesToRender = useSelector(state => state.moviesToRender)

    const linedLayout = useBreakpoints(1100);

    return (
        <div className="movies-list">
            <div className="utils">
                <Filter /> 
                <Sort />
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
