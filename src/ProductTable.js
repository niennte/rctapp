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
    }


    render() {
        
        let productArray = Object.keys(this.props.products)
                .map((pid) => this.props.products[pid]);

        let rows = [];
        productArray.forEach(
            (product) => {
                if ( product.name.indexOf(this.props.filterText) === -1 ||
                    (!product.stocked && this.props.inStockOnly)) {
                    return;
                } else {
                    rows.push(
                        <ProductRow product={product} key={product.id} />
                    );
                }
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
