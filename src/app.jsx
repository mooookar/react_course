import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

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

import Page404 from './pages/Page404';

import ErrorBoundary from './components/error_boundary';
import { loadMoviesList } from './actions';
import { selectMoviesList } from './selectors';

const App = () => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMoviesList);

    const [modalType, setModalType] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [movieForEdit, setMovieForEdit] = useState(null);

    useEffect(() => {
        dispatch(loadMoviesList());
    }, []);

    const openModal = useCallback(
        (type, id) => {
            setModalType(type);
            setModalOpen(true);
            setMovieForEdit(id);

            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        },
        [modalType, movieForEdit]
    );

    function searchMovie(title) {
        setSearchString(title);
    }

    function closeModal() {
        setModalOpen(false);

        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="wrapper">
            <Switch>
                <Route exact path={['/','/search/:name']}>
                    <Header>
                        <Logo />
                        <Button
                            classname="add-movie"
                            text="+ Add movie"
                            clickHandler={openModal.bind(this, 'add')}
                        />
                        <Search searchMovie={searchMovie} />
                    </Header>

                    <ErrorBoundary>
                        <MoviesList openModal={openModal} />
                    </ErrorBoundary>

                    <Footer />
                </Route>
                <Route exact path="/film/:id">
                    <Header>
                        <Logo />
                        <BackToSearch />
                        <MoviePreview />
                    </Header>

                    <ErrorBoundary>
                        <MoviesList openModal={openModal} />
                    </ErrorBoundary>

                    <Footer />
                </Route>
                <Route exact path="/404">
                    <Page404 />
                </Route>
                <Redirect
                    from="*"
                    to={{
                        pathname: '/404',
                    }}
                />
            </Switch>

            <ModalWindow isOpen={isModalOpen} close={closeModal.bind(this)}>
                {modalType == 'delete' ? (
                    <Delete close={closeModal} movieId={movieForEdit} />
                ) : null}
                {modalType == 'edit' ? (
                    <Edit
                        close={closeModal}
                        movie={movies.find((v) => v.id == movieForEdit)}
                    />
                ) : null}
                {modalType == 'add' ? <Add close={closeModal} /> : null}
            </ModalWindow>
        </div>
    );
};

export default App;
