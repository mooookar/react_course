import {
    ADD_MOVIES,
    ADD_FILTERS,
    FILTER_BY_GENRE,
    RESET_FILTERS,
    SORT_BY_VALUE,
    DELETE_MOVIE,
    ADD_NEW_MOVIE,
    EDIT_MOVIE,
    SET_ACTIVE_FILTERS,
} from './constants.js';

export function loadMoviesList() {
    return (dispatch) => {
        fetch('http://localhost:4000/movies?limit=18')
            .then((data) => data.json())
            .then((json) => {
                dispatch(addMoviesList(json.data));
                dispatch(
                    addFiltersList([
                        ...new Set(
                            json.data.reduce(
                                (acc, movie) => acc.concat(movie.genres),
                                []
                            )
                        ),
                    ])
                );
            });
    };
}

export function addFiltersList(payload) {
    return { type: ADD_FILTERS, payload };
}
export function filterByGenre(payload) {
    return { type: FILTER_BY_GENRE, payload };
}
export function setActiveFilters(payload) {
    return { type: SET_ACTIVE_FILTERS, payload };
}
export function resetFilters() {
    return { type: RESET_FILTERS };
}

export function sortByValue(payload) {
    return { type: SORT_BY_VALUE, payload };
}

export function addMoviesList(payload) {
    return { type: ADD_MOVIES, payload };
}

// export function sortMovies(payload) {
//     return { type: SORT_MOVIES, payload };
// }

export function addNewMovie(payload) {
    return { type: ADD_NEW_MOVIE, payload };
}
export function editMovie(payload) {
    return { type: EDIT_MOVIE, payload };
}
export function deleteMovie(payload) {
    return { type: DELETE_MOVIE, payload };
}
