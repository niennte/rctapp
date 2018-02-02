import React, { Component } from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';
import ProductData from './ProductData.js';

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: false,
            productData: ProductData
        };
    }

    render() {
        return(
            <div className="Products">
                <h4>Products</h4>
                <Filters
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    products={this.state.productData}  
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}>
                </ProductTable>
                <ProductForm />
            </div>
        );
    }
}

export default Products;
