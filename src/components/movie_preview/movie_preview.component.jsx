import React from 'react';
import './movie-preview.scss';

function MoviePreview({movie}) {
    const {poster, title, year, runtime, overview} = movie

    return (
        <div className="movie-preview">
            <img className="movie-preview__poster" src={poster} />
            <div className="movie-preview__info">
                <h1>{title}</h1>
                <p>Oscar Winning Movie</p>
                <p className="movie-preview__year-time">{year}&nbsp;&nbsp;&nbsp;{runtime}min</p>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MoviePreview;
