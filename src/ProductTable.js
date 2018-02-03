import React, { Component } from 'react';
import ProductTableHeader from './ProductTableHeader.js';
import ProductRow from './ProductRow.js';
import './ProductTable.css';

class ProductTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sort: {
                column: 'name',
                direction: 'desc'
            }
        };

        this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    sortByColumnAndDirection(objectA, objectB) {
        let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
            [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
        }
        if (a > b) {
            return 1 * isDesc;
        }
        if (a < b) {
            return -1 * isDesc;
        }
        return 0;
    }

    sortProducts() {
        let productArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        return productArray.sort(this.sortByColumnAndDirection);         
    }


    handleSort(column, direction) {
        this.setState({
            sort: {
                column: column,
                direction: direction
            }
        });
    }

    handleDelete(id) {
        this.props.onDelete(id);
    }

    render() {
        let rows = [];
        this.sortProducts().forEach(
            (product) => {
                if ( product.name.indexOf(this.props.filterText) === -1 ||
                    (!product.stocked && this.props.inStockOnly)) {
                    return;
                } else {
                    rows.push(
                        <ProductRow
                            product={product}
                            key={product.id}
                            onDelete={this.handleDelete}
                        />
                    );
                }
            }
        );

        return(
            <div>
                <table className="ProductTable">
                    <thead>
                        <tr>
                            <ProductTableHeader 
                                onSort={this.handleSort}
                                column="name"
                                currentSort={this.state.sort}
                            >
                            </ProductTableHeader>
                            <ProductTableHeader
                                onSort={this.handleSort}
                                column="price"
                                currentSort={this.state.sort}
                            >
                            </ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>    
            </div>
        );
    }
}

export default ProductTable;
