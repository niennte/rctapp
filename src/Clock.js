import React from 'react';

class Clock extends React.Component {

    // expects props
    constructor(props) {

        // good practice when meaningfully extending
        super(props);

        this.state = {
            time: new Date().toLocaleString()
        };

        // bind method to object in callbacks
        this.updateClock = this.updateClock.bind(this);
    }

    componentDidMount() {
        this.intervalId = setInterval(
            this.updateClock,
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    updateClock() {
        // this is equal to Window object
        // because it is passed as a callback on a global function
        // console.log(this);
        this.setState({
            time: new Date().toLocaleString()
        });
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
