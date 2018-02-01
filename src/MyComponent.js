import React from 'react';

function handleClick() {
    // "this" is undefined
    console.log(this);
}

class MyComponent extends React.Component {
    render() {
        return(
            <button onClick={handleClick}>
                Click me
            </button>
        );
    }
}

export default MyComponent;
