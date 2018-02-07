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
            <form className="pb-4 row">
                <div className="form-group col-12 col-md-6">
                    <input
                        className="form-control" 
                        type="text" 
                        placeholder="Search by product name"
                        value={this.props.filterText}
                        onChange={this.handleChange}
                        name="filterText"
                    />
                </div>
                <div className="form-group form-check col-12 col-md-6 pt-md-2 text-center text-md-left">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleChange}
                        name="inStockOnly"
                    />
                    <label className="form-check-label">
                        Only show stocked products
                    </label>
                </div>
            </form>
        );
    }
}

export default Filters;
