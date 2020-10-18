export const validate = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = 'This field is required';
    }

    if (!values.release_date) {
        errors.release_date = 'This field is required';
    } else if (!/^(\d){4}-(\d){1,2}-(\d){1,2}$/i.test(values.release_date)) {
        errors.release_date = 'Invalid date format (YYYY-MM-DD)';
    }

    if (!values.url) {
        errors.url = 'This field is required';
    }

    if (!values.genres || values.genres.length == 0) {
        errors.genres = 'This field is required';
    }

    if (!values.overview) {
        errors.overview = 'This field is required';
    }

    if (!values.runtime) {
        errors.runtime = 'This field is required';
    } else if (!/^(\d)+$/i.test(values.runtime)) {
        errors.runtime = 'Please enter valid number of minutes';
    }

    return errors;
};