import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
    ADD_MOVIES,
    ADD_FILTERS,
    FILTER_BY_GENRE,
    RESET_FILTERS,
    SORT_BY_VALUE,
    SEARCH_RESET,
    SEARCH_BY_VALUE,
    ADD_NEW_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
} from './constants';

const initialState = {
    movies: [],
    moviesToRender: [],
    filters: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                movies: action.payload,
                moviesToRender: action.payload,
            };

        case ADD_FILTERS:
            return { ...state, filters: action.payload };

        case FILTER_BY_GENRE:
            return {
                ...state,
                moviesToRender: state.movies.filter((movie) =>
                    movie.genres.includes(action.payload)
                ),
            };

        case RESET_FILTERS:
            return { ...state, moviesToRender: state.movies };

        case SORT_BY_VALUE: {
            return {
                ...state,
                moviesToRender: [...state.movies].sort((a, b) => {
                    if (a[action.payload] > b[action.payload]) {
                        return 1;
                    }
                    if (a[action.payload] < b[action.payload]) {
                        return -1;
                    }
                    return 0;
                }),
            };
        }

        case SEARCH_BY_VALUE:
            return {
                ...state,
                moviesToRender: state.movies.filter((movie) =>
                    movie.title
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };

        case SEARCH_RESET:
            return { ...state, moviesToRender: state.movies };

        case ADD_NEW_MOVIE: {
            let newMovies = state.movies.concat(action.payload);
            return {
                ...state,
                movies: [...newMovies],
                moviesToRender: [...newMovies],
            };
        }

        case EDIT_MOVIE: {
            let newMovies = state.movies.map((movie) =>
                movie.id === action.payload.id ? action.payload : movie
            );
            return {
                ...state,
                movies: [...newMovies],
                moviesToRender: [...newMovies],
            };
        }

        case DELETE_MOVIE: {
            let newMovies = state.movies.filter(
                (movie) => movie.id != action.payload
            );
            return {
                ...state,
                movies: [...newMovies],
                moviesToRender: [...newMovies],
            };
        }

        default:
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
