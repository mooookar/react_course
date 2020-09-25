import React from 'react';
import './movie-preview.scss';

function MoviePreview({ movie }) {
    const {
        poster_path,
        title,
        release_date,
        runtime,
        overview,
        vote_average,
    } = movie;

    return (
        <div className="movie-preview">
            <img className="movie-preview__poster" src={poster_path} />
            <div className="movie-preview__info">
                <h1>
                    {title}
                    <span className="movie-preview__rating">
                        {vote_average}
                    </span>
                </h1>
                <p>Oscar Winning Movie</p>
                <p className="movie-preview__year-time">
                    {release_date}&nbsp;&nbsp;&nbsp;{runtime}min
                </p>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default MoviePreview;
