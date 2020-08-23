import React from 'react';

import Header from './components/header';
import Logo from './components/logo';
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

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            modalType: '',
            isModalOpen: false,
            movieForEdit: null,
            searchString: null
        };
    }

    componentDidMount(){
        this.setState({movies: movies_array})
    }

    componentWillUnmount(){
        console.log('unmounting')
    }

    openModal(type, id) {
        this.setState({
            modalType: type,
            isModalOpen: true,
            movieForEdit: id,
        });
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    }

    searchMovie(title) {
        this.setState({ searchString: title });
    }

    editMovie(movie) {
        let newMovies = this.state.movies.map((v) =>
            v.id === movie.id ? movie : v
        );
        this.setState(prev => ({...prev , movies: newMovies }));
    }

    addMovie(movie) {
        movie.id = Math.round(Math.random() * 999999);
        this.setState({ movies: [...this.state.movies].concat(movie) });
    }

    deleteMovie() {
        this.setState({
            movies: this.state.movies.filter(
                (movie) => movie.id != this.state.movieForEdit
            ),
        });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <div className="wrapper">
                <Header>
                    <Logo />
                    <Button
                        classname="add-movie"
                        text="+ Add movie"
                        clickHandler={this.openModal.bind(this, 'add')}
                    />
                    <Search searchMovie={this.searchMovie.bind(this)} />
                </Header>

                <ErrorBoundary>
                    <MoviesList
                        movies={
                            this.state.searchString
                                ? this.state.movies.filter((v) =>
                                      v.title
                                          .toLowerCase()
                                          .includes(
                                              this.state.searchString.toLowerCase()
                                          )
                                  )
                                : this.state.movies
                        }
                        openModal={this.openModal.bind(this)}
                    />
                </ErrorBoundary>

                <Footer>
                    <Logo />
                </Footer>

                <ModalWindow
                    isOpen={this.state.isModalOpen}
                    close={this.closeModal.bind(this)}
                >
                    {this.state.modalType == 'delete' ? (
                        <Delete
                            close={this.closeModal.bind(this)}
                            deleteMovie={this.deleteMovie.bind(this)}
                        />
                    ) : null}
                    {this.state.modalType == 'edit' ? (
                        <Edit
                            close={this.closeModal.bind(this)}
                            movie={this.state.movies.find(
                                (v) => v.id == this.state.movieForEdit
                            )}
                            editMovie={this.editMovie.bind(this)}
                        />
                    ) : null}
                    {this.state.modalType == 'add' ? (
                        <Add
                            close={this.closeModal.bind(this)}
                            addMovie={this.addMovie.bind(this)}
                            movies={this.state.movies}
                        />
                    ) : null}
                </ModalWindow>
            </div>
        );
    }
}

export default App;
