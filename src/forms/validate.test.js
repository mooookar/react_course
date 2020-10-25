import { validate } from './validate';

describe('test validation function', () => {
    it('should return empty object if everything is OK', () => {
        const values = {
            title: 'title',
            release_date: '2000-10-10',
            url: 'url',
            genres: ['1', '2'],
            overview: 'overview',
            runtime: '100',
        };

        const result = validate(values);

        expect(result).toEqual({});
    });

    it("should return object with error fields", ()=>{
        const values = {}

        const result = validate(values);

        expect(result).toEqual({
            title: 'This field is required',
            release_date: 'This field is required',
            url: 'This field is required',
            genres: 'This field is required',
            overview: 'This field is required',
            runtime: 'This field is required',
        });
    })

    it('should check pattern of values if applicable', ()=> {
        const values = {
            title: 'title',
            release_date: '15 March',
            url: 'url',
            genres: ['1', '2'],
            overview: 'overview',
            runtime: 'string',
        };

        const result = validate(values);

        expect(result).toEqual({
            release_date: 'Invalid date format (YYYY-MM-DD)',
            runtime: 'Please enter valid number of minutes'
        });
    })
});
