import React, { Component } from 'react';
import ProductTableHeader from './ProductTableHeader.js';
import ProductRow from './ProductRow.js';
import './ProductTable.css';

class ProductTable extends Component {

    render() {
        
        let productsArray = Object.keys(this.props.products)
                .map((pid) => this.props.products[pid]);
        let rows = [];

        productsArray.forEach( 
            (product) => {
                rows.push(
                    <ProductRow product={product} key={product.id}></ProductRow>
                );
            }
        );

        return(
            <div>
                <table className="ProductTable">
                    <thead>
                        <tr>
                            <ProductTableHeader column="name">
                            </ProductTableHeader>
                            <ProductTableHeader column="price">
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
