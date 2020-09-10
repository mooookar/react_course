import React, { createRef, useState } from 'react';
import Button from '../../components/button';

const Add = ({ close, addMovie }) => {
    const [state, setState] = useState({
        id: '',
        title: '',
        year: '',
        url: '',
        genres: '',
        overview: '',
        runtime: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        addMovie({
            id: Math.round(Math.random() * 99999),
            title: state.title,
            year: +state.year,
            url: state.url,
            genres: [...state.genres.split(' ')],
            overview: state.overview,
            runtime: state.runtime,
            poster:
                'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        });

        close();
    }

    function reset() {
        setState({
            ...state,
            id: '',
            title: '',
            year: '',
            url: '',
            genres: '',
            overview: '',
            runtime: '',
        });
    }

    function updateMovieinfo(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    return (
        <form className="form-edit" onSubmit={handleSubmit.bind(this)}>
            <div className="close" onClick={close} title="Close"></div>
            <h2>ADD MOVIE</h2>

            <label>
                <p className="title">TITLE</p>
                <input
                    type="text"
                    name="title"
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">RELEASE DATE</p>
                <input
                    type="number"
                    name="year"
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">MOVIE URL</p>
                <input
                    type="text"
                    name="url"
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">GENRE</p>
                <input
                    type="text"
                    name="genres"
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">OVERVIEW</p>
                <input
                    type="text"
                    name="overview"
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">RUNTIME</p>
                <input
                    type="text"
                    name="runtime"
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <br />
            <div className="form-buttons">
                <Button type="reset" classname="secondary" text="Reset" />
                <Button type="submit" classname="primary" text="Save" />
            </div>
        </form>
    );
};

export default Add;
