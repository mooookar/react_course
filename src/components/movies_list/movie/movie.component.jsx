import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import './movie.scss';

import {useHistory} from 'react-router-dom';

import useClickOutside from '../../../hooks/use-click-outside';

const Movie = ({ movie, openModal }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const {
        id,
        title,
        release_date,
        genres,
        poster_path,
    } = movie;

    let history = useHistory()

    const ref = useRef();
    useClickOutside(ref, () => setMenuOpen(false));

    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
    }

    function handlePosterClick() {
        // setMoviePreview(id);
        history.push(`/film/${id}`)
    }

    return (
        <div className="movies-list__movie">
            <img
                className="movies-list__poster"
                src={poster_path}
                alt=""
                onClick={handlePosterClick}
            />
            <div className="movies-list__info">
                <p className="movies-list__date">{release_date}</p>
                <p className="movies-list__title">{title}</p>
                <p className="movies-list__genres">
                    {genres
                        .map((v) => v[0].toUpperCase() + v.substr(1))
                        .join(', ')}
                </p>
            </div>
            <div
                ref={ref}
                className={`movies-list__actions ${isMenuOpen ? 'open' : ''}`}
            >
                <div
                    className="movies-list__actions-icon"
                    onClick={toggleMenu}
                ></div>
                <ul className="movies-list__menu">
                    <li
                        className="movies-list__menu-item"
                        onClick={() => {
                            openModal('edit', id);
                            toggleMenu();
                        }}
                    >
                        Edit
                    </li>
                    <li
                        className="movies-list__menu-item"
                        onClick={() => {
                            openModal('delete', id);
                            toggleMenu();
                        }}
                    >
                        Delete
                    </li>
                </ul>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: propTypes.shape({
        title: propTypes.string.isRequired,
        release_date: propTypes.string.isRequired,
        genres: propTypes.arrayOf(propTypes.string).isRequired,
        poster_path: propTypes.string.isRequired,
    }).isRequired,
    openModal: propTypes.func.isRequired,
};

export default Movie;
