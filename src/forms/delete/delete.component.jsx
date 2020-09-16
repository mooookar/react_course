import React from 'react';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../actions';

function Delete({ close, movieId }) {
    const dispatch = useDispatch()

    function handleDelete(e){
        e.preventDefault()
        dispatch(deleteMovie(movieId))
        // deleteMovie();
        close();
    }

    return (
        <form className="form-delete" onSubmit={handleDelete}>
            <div className="close" onClick={close} title="Close"></div>
            <h2>DELETE MOVIE</h2>
            <p>Are you sure you want to delete this movie?</p>
            <Button classname="primary" text="Confirm" />
        </form>
    );
}

export default Delete;
