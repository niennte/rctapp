import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends Component {

    constructor(props) {
        super(props);
        if (typeof this.props.openProduct === 'object' && this.props.openProduct !== null) {
            this.state = {
                product: this.props.openProduct,
                errors: {}
            };
        } else {
            this.state = {
                product: Object.assign({}, RESET_VALUES),
                errors: {}
            };
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product };
        });
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        });
        e.preventDefault();
    }

    render() {
        return(
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name
                        <br />
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            value={this.state.product.name}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        Category
                        <br />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="category"
                            value={this.state.product.category}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        Price
                        <br />
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="price"
                            value={this.state.product.price}
                        />
                    </label>
                </p>


                <p>
                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="stocked"
                            checked={this.state.product.stocked}
                        />
                        In stock?
                    </label>
                </p>
                <input type="hidden" name="id" value={this.state.product.id} />
                <input type="submit" value="Save" onClick={this.handleSave} />
            </form>
        );
    }
}

export default ProductForm;
