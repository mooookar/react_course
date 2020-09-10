import React, { useState } from 'react';
import Button from '../../components/button';
import '../forms.scss';

const Edit = ({ movie, close, editMovie }) => {
    const [state, setState] = useState({ ...movie });

    function handleSubmit(e) {
        console.log(1)
        e.preventDefault();
        editMovie(state);
        close();
    }

    function updateMovieinfo(e) {
        let prop = e.target.name;
        let value = e.target.value;

        if (prop == 'genres') {
            value = value.split(' ');
        }

        if (prop == 'year') {
            value = +value;
        }

        setState({
            ...state,
            [prop]: value,
        });
    }

    function reset() {
        setState({
            ...state,
            title: '',
            year: '',
            url: '',
            genres: [],
            overview: '',
            runtime: '',
        });
    }

    return (
        <form className="form-edit" onSubmit={handleSubmit}>
            <div className="close" onClick={close} title="Close"></div>
            <h2>EDIT MOVIE</h2>
            <label>
                <p className="title">MOVIE ID</p>
                <p className="info">{state.id}</p>
            </label>
            <label>
                <p className="title">TITLE</p>
                <input
                    required
                    type="text"
                    name="title"
                    defaultValue={state.title}
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">RELEASE DATE</p>
                <input
                    required
                    type="nimber"
                    name="year"
                    defaultValue={state.year}
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">MOVIE URL</p>
                <input
                    required
                    type="text"
                    name="url"
                    defaultValue={state.url}
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">GENRE</p>
                <input
                    required
                    type="text"
                    name="genres"
                    defaultValue={
                        state.genres.length > 0 ? state.genres.join(' ') : null
                    }
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">OVERVIEW</p>
                <input
                    required
                    type="text"
                    name="overview"
                    defaultValue={state.overview}
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <label>
                <p className="title">RUNTIME</p>
                <input
                    required
                    type="text"
                    name="runtime"
                    defaultValue={state.runtime}
                    onChange={updateMovieinfo.bind(this)}
                />
            </label>
            <br />
            <div className="form-buttons">
                <Button
                    type="reset"
                    classname="secondary"
                    text="Reset"
                    clickHandler={reset.bind(this)}
                />
                <Button type="submit" classname="primary" text="Save" />
            </div>
        </form>
    );
};

export default Edit;
