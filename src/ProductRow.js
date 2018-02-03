import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit() {
        this.props.onEdit(this.props.product.id);
    }

    delete() {
        this.props.onDelete(this.props.product.id);
    }

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
                    <button onClick={this.edit} style={{}}>
                        Edit
                    </button>
                </td>
                <td>
                    <button onClick={this.delete} style={{color: 'red'}}>
                        x
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
