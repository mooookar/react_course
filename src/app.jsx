import React from 'react';

import Header from './components/header';
import Logo from './components/logo';
import Button from './components/button';
import Search from './components/search';
import Filter from './components/filter';
import Sort from './components/sort';
import MoviesList from './components/movies_list';
import Footer from './components/footer';

import ErrorBoundary from './components/error_boundary';

const App = () => (
    <div className="wrapper">
        <Header>
            <Logo />
            <Button classname="add-movie" text="+ Add movie" />
            <Search />
        </Header>

        <ErrorBoundary>
            <div className="movies-list">
                <div className="utils">
                    <Filter />
                    <Sort />
                </div>
                <div className="counter">39 movies found</div>
                <MoviesList />
            </div>
        </ErrorBoundary>

        <Footer>
            <Logo />
        </Footer>
    </div>
);

export default App;
