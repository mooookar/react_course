import React, { useState } from 'react';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { addNewMovie } from '../../actions';

const Add = ({ close }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        id: '',
        title: '',
        release_date: '',
        url: '',
        genres: '',
        overview: '',
        runtime: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(
            addNewMovie({
                id: Math.round(Math.random() * 99999),
                title: state.title,
                release_date: state.release_date,
                url: state.url,
                genres: [...state.genres.split(' ')],
                overview: state.overview,
                runtime: state.runtime,
                vote_average: (Math.random() * 8 + 2).toFixed(1), // TODO fake data
                poster_path: '',
            })
        );

        close();
    }

    function reset() {
        setState({
            ...state,
            id: '',
            title: '',
            release_date: '',
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
                    name="release_date"
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
