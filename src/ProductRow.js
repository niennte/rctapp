import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
    render() {
        return(
            <tr>
                <td>
                    <span className={
                        this.props.product.stocked ?
                            '' : 'ProductRow-out-of-stock'
                    }>
                        {this.props.product.name}
                    </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button onClick={this.destroy} style={{color: 'red'}}>
                        x
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
