import React, { Component } from 'react';

class Filters extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }

    render() {
        return(
            <form>
                <input 
                    type="text" 
                    placeholder="Search"
                    // this works either way
                    value={this.props.filterText}
                    onChange={this.handleChange}
                    name="filterText"
                />
                <p>
                    <input
                        type="checkbox"
                        // this works either way
                        checked={this.props.inStockOnly}
                        onChange={this.handleChange}
                        name="inStockOnly"
                    />Only show stocked products
                </p>
            </form>
        );
    }
}

export default Filters;
