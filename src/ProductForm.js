import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends Component {

    constructor(props) {
        super(props);
        if (typeof props.openProduct === 'object' && props.openProduct !== null) {
            this.state = {
                product: props.openProduct,
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
        this.handleBlur = this.handleBlur.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.openProduct === 'object' && nextProps.openProduct !== null) {
            this.setState({
                product: nextProps.openProduct,
                errors: {}
            });
        } else {
            this.setState({
                product: Object.assign({}, RESET_VALUES),
                errors: {}
            });
        }
    }


    validateName() {
        if (this.state.product['name'] === '') {
            this.setState(
                (prevState) => {
                    const errors = prevState.errors;
                    errors['name'] = "Name is required!";
                    return { errors: errors};
                }
            );
        } else {
            this.setState(
                (prevState) => {
                    const errors = prevState.errors;
                    delete errors['name'];
                    return { errors: errors};
                }
            );
        }
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

    handleBlur(e) { 
        if (e.target.name === 'name') {
            this.validateName();
        }
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        });
        e.preventDefault();
    }

    handleReset() {
        this.props.onCloseProduct();
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        });
    }

    render() {
    const nameErrors = this.state.errors.name ?
        <div class="invalid-feedback">
            {this.state.errors.name}
        </div> :
        "";
    const nameClass = this.state.errors.name ?
            " is-invalid" : ""; 

        return(
            <form className="py-2">
                <h3 className="slender-heading">Enter a new product</h3>
                <div className="form-group row ">
                    <label className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">                
                        <input
                            className={`form-control ${nameClass}`} 
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            value={this.state.product.name}
                        />
                    {nameErrors}
                    </div>
                </div>

                <div className="form-group row ">
                    <label className="col-sm-2 col-form-label">
                        Category
                    </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            onChange={this.handleChange}
                            type="text"
                            name="category"
                            value={this.state.product.category}
                        />
                    </div>
                </div>

                <div className="form-group row ">
                    <label className="col-sm-2 col-form-label">
                        Price
                    </label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            onChange={this.handleChange}
                            type="text"
                            name="price"
                            value={this.state.product.price}
                        />
                    </div>
                </div>


                <div className="form-check col-sm-10 ml-auto pl-4">
                    <input
                        className="form-check-input"
                        onChange={this.handleChange}
                        type="checkbox"
                        name="stocked"
                        checked={this.state.product.stocked}
                    />
                    <label className="form-check-label">
                        In stock?
                    </label>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 ml-auto">
                        <input
                            className="btn btn-primary pull-right"
                            type="submit"
                            value="Save"
                            onClick={this.handleSave} />
                        <input
                            className="btn btn-secondary pull-right"
                            type="reset"
                            value="Cancel"
                            onClick={this.handleReset}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default ProductForm;
