import React from 'react';

class Clock extends React.Component {

    // expects props
    constructor(props) {

        // good practice when meaningfully extending
        super(props);

        this.state = {
            time: new Date().toLocaleString()
        };
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
