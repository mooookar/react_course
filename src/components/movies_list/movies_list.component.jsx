import React from 'react';

import movies_array from '../../mock_movies';

import Movie from '../movie';

function MoviesList() {
    return (
        <div className="movies-list__container">
            {movies_array.map( movie => (<Movie key={movie.id} {...movie} />))}
        </div>
    )
}

export default MoviesList;
