import React, { Component } from 'react';

class ProductTableHeader extends Component {

    constructor(props) {

        super(props);
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(e) {
        this.props.onSort(this.props.column, e.target.name || e.target.dataset.name);
    }

    render() {

        let currentSort = this.props.currentSort.column === this.props.column ?
            this.props.currentSort.direction : false;

        return(
            <th className="text-center">
                <span className="d-inline-block pt-2">
                {this.props.column}
                </span>
                <span className="pull-left">
                <button
                    onClick={this.handleSort} 
                    className={currentSort === 'asc' ? "btn btn-secondary" : "btn btn-light"} 
                    name='asc'
                >
                    <i className="fas fa-arrow-down" data-name='asc'></i>
                </button>

                <button
                    onClick={this.handleSort}
                    className={currentSort === 'desc' ? "btn btn-secondary" : "btn btn-light"}
                    name='desc'
                >
                    <i className="fas fa-arrow-up" data-name="desc"></i>
                </button>
                </span>
            </th>
        );
    }
}

export default ProductTableHeader;
