import React, { Component } from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';
import ProductData from './ProductData.js';

class Products extends Component {
    render() {
        return(
            <div className="Products">
                <h4>Products</h4>
                <Filters / >
                <ProductTable products={ProductData}></ProductTable>
                <ProductForm />
            </div>
        );
    }
}

export default Products;
