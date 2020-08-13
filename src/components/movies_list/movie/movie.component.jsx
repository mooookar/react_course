import React from 'react';
import propTypes from 'prop-types';

function Movie({ title, year, genres, poster }) {
    return (
        <div className="movies-list__movie">
            <img
                className="movies-list__poster"
                src={poster}
                alt={`${title} poster`}
            />
            <div className="movies-list__info">
                <p className="movies-list__date">{year}</p>
                <p className="movies-list__title">{title}</p>
                <p className="movies-list__genres">
                    {genres
                        .map((v) => v[0].toUpperCase() + v.substr(1))
                        .join(', ')}
                </p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    poster: propTypes.string.isRequired,
};

export default Movie;
