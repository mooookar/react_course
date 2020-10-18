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
} from '../constants';
import {
    addFiltersList,
    filterByGenre,
    setActiveFilters,
    resetFilters,
    sortByValue,
    addMoviesList,
    addNewMovie,
    editMovie,
    deleteMovie,
    loadMoviesList,
} from '../actions';

describe('Action creators', () => {
    test('Load movies list returns a function', () => {
        const typeOfResult = 'function'
        expect(typeof loadMoviesList()).toEqual(typeOfResult)
    })

    test('Load movies list will call a fetch', () => {
        global.fetch = jest.fn().mockImplementation(() => {
            var p = new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    data: {title: "Movie"},
                    json: function () {
                        return { data: {title: "Movie"}};
                    },
                });
            });
            return p;
        });
    
        loadMoviesList()();
    
        expect(fetch).toBeCalled();
    })

    test('Add filters list', () => {
        const expected = { type: ADD_FILTERS, payload: 'test' };
        expect(addFiltersList('test')).toEqual(expected);
    });

    test('Filter by genre', () => {
        const expected = { type: FILTER_BY_GENRE, payload: 'test' };
        expect(filterByGenre('test')).toEqual(expected);
    });

    test('Set active filters', () => {
        const expected = { type: SET_ACTIVE_FILTERS, payload: 'test' };
        expect(setActiveFilters('test')).toEqual(expected);
    });

    test('Reset Filters', () => {
        const expected = { type: RESET_FILTERS };
        expect(resetFilters()).toEqual(expected);
    });

    test('Sort by value', () => {
        const expected = { type: SORT_BY_VALUE, payload: 'test' };
        expect(sortByValue('test')).toEqual(expected);
    });

    test('Add movies list', () => {
        const expected = { type: ADD_MOVIES, payload: 'test' };
        expect(addMoviesList('test')).toEqual(expected);
    });

    test('Add new movie', () => {
        const expected = { type: ADD_NEW_MOVIE, payload: 'test' };
        expect(addNewMovie('test')).toEqual(expected);
    });

    test('Edit movie', () => {
        const expected = { type: EDIT_MOVIE, payload: 'test' };
        expect(editMovie('test')).toEqual(expected);
    });

    test('Delete movie', () => {
        const expected = { type: DELETE_MOVIE, payload: 'test' };
        expect(deleteMovie('test')).toEqual(expected);
    });
});
