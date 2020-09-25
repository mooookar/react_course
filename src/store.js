import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
    ADD_MOVIES,
    ADD_FILTERS,
    SET_ACTIVE_FILTERS,
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
    filters: [],
    activeFilters: [],
    searchString: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };

        case ADD_FILTERS:
            return { ...state, filters: action.payload };

        case SET_ACTIVE_FILTERS:
            return {...state, activeFilters: state.activeFilters.concat(action.payload)}

        case RESET_FILTERS:
            return { ...state, activeFilters: [] };

        case SORT_BY_VALUE: {
            return {
                ...state,
                movies: [...state.movies].sort((a, b) => {
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
                searchString: action.payload
            };

        case SEARCH_RESET:
            return { ...state, searchString: '' };

        case ADD_NEW_MOVIE: {
            let newMovies = state.movies.concat(action.payload);
            return {
                ...state,
                movies: [...newMovies],
            };
        }

        case EDIT_MOVIE: {
            let newMovies = state.movies.map((movie) =>
                movie.id === action.payload.id ? action.payload : movie
            );
            return {
                ...state,
                movies: [...newMovies],
            };
        }

        case DELETE_MOVIE: {
            let newMovies = state.movies.filter(
                (movie) => movie.id != action.payload
            );
            return {
                ...state,
                movies: [...newMovies],
            };
        }

        default:
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
