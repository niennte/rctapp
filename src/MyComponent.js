import React from 'react';

class MyComponent extends React.Component {

    handleClick() {
        // "this" is still undefined
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
