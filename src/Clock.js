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

    componentDidMount() {
        this.intervalId = setInterval(
            /*
            (function() {
                // "this" is unfedined within an anonymous function
                // call and Window in a function literal
                console.log(this);
                this.updateClock();}
            )(),
            */
            // Lexical value of "this" preserved
            () => this.updateClock(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    updateClock() {
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
