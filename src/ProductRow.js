import React, { Component } from 'react';

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
                            '' : 'text-danger'
                    }>
                        {this.props.product.name}
                    </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button
                        onClick={this.edit}
                        className="btn btn-light"
                        data-toggle="modal"
                        data-target="#productFormModal"
                    >
                            Edit
                    </button>
                </td>
                <td>
                    <button
                        onClick={this.delete}
                        className="btn btn-light text-danger"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
