import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends Component {

    constructor(props) {
        super(props);
        if (typeof props.openProduct === 'object' && props.openProduct !== null) {
            this.state = {
                isEdit: true,
                product: props.openProduct,
                errors: {}
            };
        } else {
            this.state = {
                isEdit: false,
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
                isEdit: true,
                product: nextProps.openProduct,
                errors: {}
            });
        } else {
            this.setState({
                isEdit: false,
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
            isEdit: false,
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        });
    }

    render() {
    const nameErrors = this.state.errors.name ?
        <div className="invalid-feedback">
            {this.state.errors.name}
        </div> :
        "";
    const nameClass = this.state.errors.name ?
            " is-invalid" : "";

        return(
<form 
    className="py-2 modal fade" 
    id="productFormModal"
    tabIndex="-1"
    role="dialog"
    data-backdrop="static"
    aria-labelledby="exampleModalLabel" aria-hidden="true"
    >
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5
                    className="modal-title slender-heading"
                    id="productFormModalLabel"
                    >
                    {this.state.isEdit? "Edit" : "Add new"} product
                </h5>
                <button 
                    onClick={this.handleReset}
                    type="button" className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
                <input
                    data-dismiss="modal"
                    className="btn btn-secondary "
                    type="reset"
                    value="Cancel"
                    onClick={this.handleReset}
                    />
                <input
                    data-dismiss="modal"
                    className="btn btn-primary "
                    type="submit"
                    value="Save"
                    onClick={this.handleSave} />
            </div>
        </div>
    </div>
</form>
        );
    }
}

export default ProductForm;
