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
            editableProduct: '',
            productData: ProductData
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.openProductForEditing = this.openProductForEditing.bind(this);
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    saveProduct(product) {
        if (product.id === '') {
            product.id = new Date().getTime();
        }
        this.setState(
            (prevState) => {
                let productData = prevState.productData;
                productData[product.id] = product;
                return { productData };
            }
        );
        this.setState({
            editableProduct: ''
        });
    }

    openProductForEditing(productId) {
        this.setState({
            editableProduct: productId
        });
    }

    deleteProduct(productId) {
        this.setState((prevState) => {
            let productData = prevState.productData;
            delete productData[productId];
            return { productData };
        });
    }

    render() {
        return(
            <div className="Products">
                <h4 className="slender-heading">Products</h4>
                <Filters
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilter={this.handleFilter}
                />
                <ProductTable
                    products={this.state.productData}  
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    editableProduct={this.state.editableProduct}
                    onEdit={this.openProductForEditing}
                    onSave={this.saveProduct}
                    onDelete={this.deleteProduct}
                >
                </ProductTable>
                <ProductForm onSave={this.saveProduct} />
            </div>
        );
    }
}

export default Products;
