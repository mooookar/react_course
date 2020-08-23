import React, { createRef } from 'react';
import './sort.scss';

const sort_options = ['Release Date', 'Title'];

class Sort extends React.Component {
    constructor({sort}){
        super();
        this.select = createRef()
        this.state = {label: ''}
        this.sort = sort
    }

    componentDidMount(){
        this.setState({label: this.select.current.value})
    }

    handleChange(){
        this.setState({label: this.select.current.value});
        this.sort(this.select.current.value == "Release Date" ? 'year' : this.select.current.value)
    }

    render() {
        return (
            <div className="utils__sort">
                <span className="utils__sort-value">{this.state.label.toUpperCase()}</span>
                <select className="utils__sort-select" ref={this.select} onChange={this.handleChange.bind(this)}>
                    {sort_options.map((v) => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Sort;
