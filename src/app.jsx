import React from 'react';

import Movie from './components/movie';

const App = () => (
    <div className="wrapper">
        <div className="header">
            <div className="logo">
                <b className="bold">netflix</b>roulette
            </div>
            <button className="add-movie">+Add movie</button>

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
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
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
