import React from 'react';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        // "this" is now equal to MyComponent object
        console.log(this);
    }


    render() {
        return(
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

export default MyComponent;
