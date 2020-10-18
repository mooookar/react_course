import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewMovie } from '../../actions';

import { useFormik } from 'formik';

import { validate } from '../validate';

const Add = ({ close }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: '',
            url: '',
            genres: '',
            overview: '',
            runtime: '',
        },
        validate,
        onSubmit: (values) => {
            dispatch(
                addNewMovie({
                    ...values,
                    id: Math.round(Math.random() * 99999),
                    vote_average: (Math.random() * 8 + 2).toFixed(1), // TODO fake data
                    poster_path: '',
                    genres: values.genres.split(' '),
                })
            );
            close();
        },
    });

    return (
        <>
            <form className="form-edit" onSubmit={formik.handleSubmit}>
                <h2>ADD MOVIE</h2>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    data-testid="title"
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div className="form-error">{formik.errors.title}</div>
                ) : null}

                <label htmlFor="release_date">Release Date</label>
                <input
                    id="release_date"
                    data-testid="release_date"
                    name="release_date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.release_date}
                />
                {formik.touched.release_date && formik.errors.release_date ? (
                    <div className="form-error">
                        {formik.errors.release_date}
                    </div>
                ) : null}

                <label htmlFor="url">Movie URL</label>
                <input
                    id="url"
                    data-testid="url"
                    name="url"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.url}
                />
                {formik.touched.url && formik.errors.url ? (
                    <div className="form-error">{formik.errors.url}</div>
                ) : null}

                <label htmlFor="genres">Genres</label>
                <input
                    id="genres"
                    data-testid="genres"
                    name="genres"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.genres}
                />
                {formik.touched.genres && formik.errors.genres ? (
                    <div className="form-error">{formik.errors.genres}</div>
                ) : null}

                <label htmlFor="overview">Overview</label>
                <input
                    id="overview"
                    data-testid="overview"
                    name="overview"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.overview}
                />
                {formik.touched.overview && formik.errors.overview ? (
                    <div className="form-error">{formik.errors.overview}</div>
                ) : null}

                <label htmlFor="runtime">Runtime</label>
                <input
                    id="runtime"
                    data-testid="runtime"
                    name="runtime"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.runtime}
                />
                {formik.touched.runtime && formik.errors.runtime ? (
                    <div className="form-error">{formik.errors.runtime}</div>
                ) : null}

                <div className="form-buttons">
                    <button className="secondary" onClick={formik.resetForm}>
                        Reset
                    </button>
                    <button type="submit" className="primary">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Add;
