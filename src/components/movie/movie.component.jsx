import React from 'react';

function Movie() {
    return (
        <div className="movies-list__movie">
            <img
                className="movies-list__poster"
                src="https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
                alt=""
            />
            <div className="movies-list__info">
                <p className="movies-list__date">2015</p>
                <p className="movies-list__title">Avengers</p>
                <p className="movies-list__genres">Comic, Action</p>
            </div>
        </div>
    );
}

export default Movie;
