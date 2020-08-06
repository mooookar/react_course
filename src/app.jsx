import React from 'react';

import Movie from './components/movie';

const movies_array = [
    {
        id: 1, 
        title: "Avengers", 
        year: 2015, 
        genres: ['comedy', 'sci&fi'], 
        poster: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg'
    },
    {
        id: 2, 
        title: "Kill Bill", 
        year: 2015, 
        genres: ['drama', 'action'], 
        poster: 'https://images-na.ssl-images-amazon.com/images/I/61mUJ4Zxc8L._AC_SL1500_.jpg'
    },
    {
        id: 3, 
        title: "Shawshank's Redemption", 
        year: 2015, 
        genres: ['documentary', 'sport', 'triller'], 
        poster: 'https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/pfilm241-esaretin-bedeli-film-posteri-movie-poster-the-shawshank-redemption_2f7ae7f4-1000x1000.jpg'
    },
    {
        id: 4, 
        title: "Hulk", 
        year: 2003, 
        genres: ['sci&fi','action'], 
        poster: 'https://www.kino-teatr.ru/movie/poster/29172/40804.jpg'
    },
    {
        id: 5, 
        title: "LaLa Land", 
        year: 2014, 
        genres: ['musical','romance'], 
        poster: 'https://m.media-amazon.com/images/I/51CLI6S+Q5L.jpg'
    },
    {
        id: 6, 
        title: "Inception", 
        year: 2013, 
        genres: ['action','sci&fi'], 
        poster: 'https://images-na.ssl-images-amazon.com/images/I/71wlPWVXb7L._AC_SY500_.jpg'
    },
]

const App = () => (
    <div className="wrapper">
        <div className="header">
            <div className="logo">
                <b className="bold">netflix</b>roulette
            </div>
            <button className="add-movie">+ Add movie</button>

            <div className="search">
                <h2 className="search__title">Find your movie</h2>
                <input
                    className="search__input"
                    type="text"
                    placeholder="What do you want to watch?"
                ></input>
                <button className="search__button">Search</button>
            </div>
        </div>

        <div className="movies-list">
            <div className="utils">
                <ul className="utils__filter">
                    <li className="utils__filter-item selected">All</li>
                    <li className="utils__filter-item">Documentary</li>
                    <li className="utils__filter-item">Comedy</li>
                    <li className="utils__filter-item">Horror</li>
                    <li className="utils__filter-item">Crime</li>
                </ul>
                <select className="utils__sort">
                    <option value="release">Release Date</option>
                    <option value="release">Title</option>
                </select>
            </div>
            <div className="counter">39 movies found</div>
            <div className="movies-list__container">
                {movies_array.map( movie => (<Movie key={movie.id} movie={movie} />))}
            </div>
        </div>

        <div className="footer">
            <div className="logo">
                <b className="bold">netflix</b>roulette
            </div>
        </div>
    </div>
);

export default App;
