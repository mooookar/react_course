import { rootReducer } from '../store';
import {
    ADD_MOVIES,
    ADD_FILTERS,
    SET_ACTIVE_FILTERS,
    RESET_FILTERS,
    SORT_BY_VALUE,
    ADD_NEW_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
} from '../constants';

describe('Root Reducer', () => {
    let store = {
        movies: [],
        filters: [],
        activeFilters: [],
    };

    beforeEach(() => {
        store = {
            movies: [],
            filters: [],
            activeFilters: [],
        };
    });

    test('Adds a movies list', () => {
        const expected = {
            ...store,
            movies: [{ title: 'test' }],
        };

        expect(
            rootReducer(store, {
                type: ADD_MOVIES,
                payload: [{ title: 'test' }],
            })
        ).toEqual(expected);
    });

    test('Adds a filters list', () => {
        const expected = {
            ...store,
            filters: ['test'],
        };

        expect(
            rootReducer(store, {
                type: ADD_FILTERS,
                payload: ['test'],
            })
        ).toEqual(expected);
    });

    test('Set an active filters list', () => {
        const expected = {
            ...store,
            activeFilters: ['test', 'another test'],
        };

        expect(
            rootReducer(store, {
                type: SET_ACTIVE_FILTERS,
                payload: ['test', 'another test'],
            })
        ).toEqual(expected);
    });

    test('Reset an active filters list', () => {
        const initialStore = {
            ...store,
            activeFilters: ['test', 'another test'],
        };

        const expected = {
            ...store,
        };

        expect(
            rootReducer(initialStore, {
                type: RESET_FILTERS,
            })
        ).toEqual(expected);
    });

    test('Sort movie list by value', () => {
        const initialStore = {
            ...store,
            movies: [
                { title: 'Z' },
                { title: 'A' },
                { title: 'B' },
                { title: 'B' },
            ],
        };

        const expected = {
            ...store,
            movies: [
                { title: 'A' },
                { title: 'B' },
                { title: 'B' },
                { title: 'Z' },
            ],
        };

        expect(
            rootReducer(initialStore, {
                type: SORT_BY_VALUE,
                payload: 'title',
            })
        ).toEqual(expected);
    });

    test('Add new movie', () => {
        const initialStore = {
            ...store,
            movies: [{ title: 'Z' }, { title: 'A' }, { title: 'B' }],
        };

        const expected = {
            ...store,
            movies: [
                { title: 'Z' },
                { title: 'A' },
                { title: 'B' },
                { title: 'D' },
            ],
        };

        expect(
            rootReducer(initialStore, {
                type: ADD_NEW_MOVIE,
                payload: { title: 'D' },
            })
        ).toEqual(expected);
    });

    test('Edit movie', () => {
        const initialStore = {
            ...store,
            movies: [
                { id: '1', title: 'Z' },
                { id: '2', title: 'A' },
            ],
        };

        const expected = {
            ...store,
            movies: [
                { id: '1', title: 'B' },
                { id: '2', title: 'A' },
            ],
        };

        expect(
            rootReducer(initialStore, {
                type: EDIT_MOVIE,
                payload: { id: '1', title: 'B' },
            })
        ).toEqual(expected);
    });

    test('Edit movie', () => {
        const initialStore = {
            ...store,
            movies: [
                { id: '1', title: 'Z' },
                { id: '2', title: 'A' },
            ],
        };

        const expected = {
            ...store,
            movies: [{ id: '2', title: 'A' }],
        };

        expect(
            rootReducer(initialStore, {
                type: DELETE_MOVIE,
                payload: '1',
            })
        ).toEqual(expected);
    });

    test('Returns store on invalid action', () => {
        expect(rootReducer(store, {})).toEqual(store);
    });
});
