import React, { useState, useEffect } from 'react';
import './movie-preview.scss';
import { useSelector } from 'react-redux';
import { selectMoviesList } from '../../selectors';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function MoviePreview() {
    const movies = useSelector(selectMoviesList);
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setMovie(movies.find((movie) => movie.id == id));
    });

    return movie ? (
        <div className="movie-preview">
            <img className="movie-preview__poster" src={movie.poster_path} />
            <div className="movie-preview__info">
                <h1>
                    {movie.title}
                    <span className="movie-preview__rating">
                        {movie.vote_average}
                    </span>
                </h1>
                <p>Oscar Winning Movie</p>
                <p className="movie-preview__year-time">
                    {movie.release_date}&nbsp;&nbsp;&nbsp;{movie.runtime}min
                </p>
                <p>{movie.overview}</p>
            </div>
        </div>
    ) : (
        <div style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#FFF', fontSize: '2rem' }}>
                No Movie Found
            </div>
            <br />
            <Link
                to="/"
                style={{
                    display: 'block',
                    textAlign: 'center',
                    color: 'rgb(237, 80, 96)',
                }}
            >
                Back to Home Page
            </Link>
        </div>
    );
}

export default MoviePreview;
