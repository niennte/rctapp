import React, { Component } from 'react';
import ProductTableHeader from './ProductTableHeader.js';
import ProductRow from './ProductRow.js';


class ProductTable extends Component {
    render() {
        return(
            <div>
                <h4>ProductTable</h4>
                <ProductTableHeader />
                <ProductRow />
            </div>
        );
    }
}

export default ProductTable;
