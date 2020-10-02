import React from 'react';
import '../forms.scss';
import { useDispatch } from 'react-redux';
import { editMovie } from '../../actions';

import { useFormik } from 'formik';

import { validate } from '../validate';

const Edit = ({ movie, close }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: movie.title,
            release_date: movie.release_date,
            url: movie.url || '',
            genres: movie.genres.join(' '),
            overview: movie.overview,
            runtime: movie.runtime,
        },
        validate,
        onSubmit: (values) => {
            dispatch(
                editMovie({
                    ...movie,
                    ...values,
                    genres: values.genres.split(' '),
                })
            );
            close();
        },
    });

    return (
        <form className="form-edit" onSubmit={formik.handleSubmit}>
            <h2>EDIT MOVIE</h2>
            <label>
                <p className="title">MOVIE ID</p>
                <p className="info">{movie.id}</p>
            </label>

            <label>
                <p className="title">TITLE</p>
                <input
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div className="form-error">{formik.errors.title}</div>
                ) : null}
            </label>

            <label>
                <p className="title">RELEASE DATE</p>
                <input
                    id="release_date"
                    name="release_date"
                    value={formik.values.release_date}
                    onChange={formik.handleChange}
                />
                {formik.touched.release_date && formik.errors.release_date ? (
                    <div className="form-error">
                        {formik.errors.release_date}
                    </div>
                ) : null}
            </label>

            <label>
                <p className="title">MOVIE URL</p>
                <input
                    id="url"
                    name="url"
                    value={formik.values.url}
                    onChange={formik.handleChange}
                />
                {formik.touched.url && formik.errors.url ? (
                    <div className="form-error">{formik.errors.url}</div>
                ) : null}
            </label>

            <label>
                <p className="title">GENRE</p>
                <input
                    id="genres"
                    name="genres"
                    value={formik.values.genres}
                    onChange={formik.handleChange}
                />
                {formik.touched.genres && formik.errors.genres ? (
                    <div className="form-error">{formik.errors.genres}</div>
                ) : null}
            </label>

            <label>
                <p className="title">OVERVIEW</p>
                <input
                    id="overview"
                    name="overview"
                    value={formik.values.overview}
                    onChange={formik.handleChange}
                />
                {formik.touched.overview && formik.errors.overview ? (
                    <div className="form-error">{formik.errors.overview}</div>
                ) : null}
            </label>
            <label>
                <p className="title">RUNTIME</p>
                <input
                    id="runtime"
                    name="runtime"
                    value={formik.values.runtime}
                    onChange={formik.handleChange}
                />
                {formik.touched.runtime && formik.errors.runtime ? (
                    <div className="form-error">{formik.errors.runtime}</div>
                ) : null}
            </label>

            <div className="form-buttons">
                <button className="secondary" onClick={formik.resetForm}>
                    Reset
                </button>
                <button type="submit" className="primary">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Edit;
