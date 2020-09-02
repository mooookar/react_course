import React, { useState, useEffect, useCallback } from 'react';

import Header from './components/header';
import Logo from './components/logo';
import BackToSearch from './components/back_to_search';
import MoviePreview from './components/movie_preview';
import Button from './components/button';
import Search from './components/search';

import MoviesList from './components/movies_list';
import Footer from './components/footer';
import ModalWindow from './components/modal_window';

import Delete from './forms/delete';
import Edit from './forms/edit';
import Add from './forms/add';

import movies_array from './mock_movies';

import ErrorBoundary from './components/error_boundary';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [modalType, setModalType] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [movieForEdit, setMovieForEdit] = useState(null);
    const [searchString, setSearchString] = useState(null);
    const [moviePreview, setMoviePreview] = useState(null);

    useEffect(() => {
        setMovies(movies_array);
    }, []);

    const openModal = useCallback((type, id) => {
        setModalType(type);
        setModalOpen(true);
        setMovieForEdit(id);

        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        }, [modalType, movieForEdit],
    )

    function searchMovie(title) {
        setSearchString(title);
    }

    const editMovie = useCallback((movie) => {
        let newMovies = movies.map((v) => (v.id === movie.id ? movie : v));
        setMovies(newMovies);
        }, [movies],
    )

    const addMovie = useCallback((movie) => {
        movie.id = Math.round(Math.random() * 999999);
        setMovies([...movies].concat(movie));
        }, [movies],
    )

    function deleteMovie() {
        setMovies(movies.filter((movie) => movie.id != movieForEdit));
    }

    function closeModal() {
        setModalOpen(false);

        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="wrapper">
            <Header>
                <Logo />
                {movies.find( movie => movie.id == moviePreview )  ? (
                    <>
                    <BackToSearch setMoviePreview={setMoviePreview}/>
                    <MoviePreview movie={movies.find( movie => movie.id == moviePreview )} />
                    </>
                ) : (
                    <>
                        <Button
                            classname="add-movie"
                            text="+ Add movie"
                            clickHandler={openModal.bind(this, 'add')}
                        />
                        <Search searchMovie={searchMovie} />
                    </>
                )}
            </Header>

            <ErrorBoundary>
                <MoviesList
                    movies={
                        searchString
                            ? movies.filter((v) =>
                                  v.title
                                      .toLowerCase()
                                      .includes(searchString.toLowerCase())
                              )
                            : movies
                    }
                    openModal={openModal}
                    setMoviePreview={setMoviePreview}
                />
            </ErrorBoundary>

            <Footer>
                <Logo />
            </Footer>

            <ModalWindow isOpen={isModalOpen} close={closeModal.bind(this)}>
                {modalType == 'delete' ? (
                    <Delete
                        close={closeModal}
                        deleteMovie={deleteMovie}
                    />
                ) : null}
                {modalType == 'edit' ? (
                    <Edit
                        close={closeModal}
                        movie={movies.find((v) => v.id == movieForEdit)}
                        editMovie={editMovie}
                    />
                ) : null}
                {modalType == 'add' ? (
                    <Add
                        close={closeModal}
                        addMovie={addMovie}
                        movies={movies}
                    />
                ) : null}
            </ModalWindow>
        </div>
    );
};

export default App;
