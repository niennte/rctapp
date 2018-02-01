import React from 'react';

// timer used here won't be available inside the class

class Clock extends React.Component {

    // expects props
    constructor(props) {

        // good practice when meaningfully extending
        super(props);

        this.state = {
            time: new Date().toLocaleString()
        };

        // timer used here will be triggered when the class is instanciated and not when the component's output is inserted into the DOM 
    }

    render() {
        return(
            <p>
                The time is {this.state.time}.
            </p>
        );
    }
}

export default Clock;
