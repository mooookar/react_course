import React from 'react';
import Button from '../../components/button';
import '../forms.scss';

class Edit extends React.Component {
    constructor({ movie, close, editMovie }) {
        super();
        this.state = {
            ...movie,
        };
        this.close = close;
        this.editMovie = editMovie;
    }

    handleSubmit(e) {
        e.preventDefault();

        this.editMovie(this.state);

        this.close();
    }

    updateMovieinfo(e) {
        let prop = e.target.name
        let value = e.target.value

        if( prop == 'genres' ){
            value = value.split(' ')
        }

        if(prop == 'year'){
            value = +value
        }
        
        this.setState({
            [prop] : value
        });
    }

    reset() {
        this.setState({
            ...this.state,
            title: '',
            year: '',
            url: '',
            genres: [],
            overview: '',
            runtime: '',
        });
    }

    render() {
        return (
            <form className="form-edit" onSubmit={this.handleSubmit.bind(this)}>
                <div className="close" onClick={this.close} title="Close"></div>
                <h2>EDIT MOVIE</h2>
                <label>
                    <p className="title">MOVIE ID</p>
                    <p className="info">{this.state.id}</p>
                </label>
                <label>
                    <p className="title">TITLE</p>
                    <input
                    required
                        type="text"
                        name="title"
                        defaultValue={this.state.title}
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">RELEASE DATE</p>
                    <input
                    required
                        type="nimber"
                        name="year"
                        defaultValue={this.state.year}
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">MOVIE URL</p>
                    <input
                        required
                        type="text"
                        name="url"
                        defaultValue={this.state.url}
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">GENRE</p>
                    <input
                    required
                        type="text"
                        name="genres"
                        defaultValue={this.state.genres.length > 0 ? this.state.genres.join(' ') : null}
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">OVERVIEW</p>
                    <input
                    required
                        type="text"
                        name="overview"
                        defaultValue={this.state.overview}
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <label>
                    <p className="title">RUNTIME</p>
                    <input
                    required
                        type="text"
                        name="runtime"
                        defaultValue={this.state.runtime}
                        onChange={this.updateMovieinfo.bind(this)}
                    />
                </label>
                <br />
                <div className="form-buttons">
                    <Button
                        type="reset"
                        classname="secondary"
                        text="Reset"
                        clickHandler={this.reset.bind(this)}
                    />
                    <Button type="submit" classname="primary" text="Save" />
                </div>
            </form>
        );
    }
}

export default Edit;
