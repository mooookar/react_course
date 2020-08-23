import React, { createRef } from 'react';
import Button from '../../components/button';

class Add extends React.Component {
    constructor({ close, addMovie }) {
        super();
        this.state = {
            id: '',
            title: '',
            year: '',
            url: '',
            genres: '',
            overview: '',
            runtime: '',
        };
        this.close = close;
        this.addMovie = addMovie;
    }

    handleSubmit(e) {
        e.preventDefault();

        this.addMovie({
            id: Math.round(Math.random() * 99999),
            title: this.state.title,
            year: +this.state.year,
            url: this.state.url,
            genres: [...this.state.genres.split(' ')],
            overview: this.state.overview,
            runtime: this.state.runtime,
            poster:
                'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        });

        this.close();
    }

    reset() {
        this.setState({
            ...this.state,
            id: '',
            title: '',
            year: '',
            url: '',
            genres: '',
            overview: '',
            runtime: '',
        });
    }

    updateMovieinfo(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className="form-edit" onSubmit={this.handleSubmit.bind(this)}>
                <div className="close" onClick={this.close} title="Close"></div>
                <h2>ADD MOVIE</h2>

                <label>
                    <p className="title">TITLE</p>
                    <input
                        type="text"
                        name="title"
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">RELEASE DATE</p>
                    <input
                        type="number"
                        name="year"
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">MOVIE URL</p>
                    <input
                        type="text"
                        name="url"
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">GENRE</p>
                    <input
                        type="text"
                        name="genres"
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">OVERVIEW</p>
                    <input
                        type="text"
                        name="overview"
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">RUNTIME</p>
                    <input
                        type="text"
                        name="runtime"
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <br />
                <div className="form-buttons">
                    <Button type="reset" classname="secondary" text="Reset" />
                    <Button type="submit" classname="primary" text="Save" />
                </div>
            </form>
        );
    }
}

export default Add;
