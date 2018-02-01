import React from 'react';

let time = new Date().toLocaleString();

class Clock extends React.Component {
    render() {
        return(
            <p>
                The time is {time}.
            </p>
        );
    }
}

export default Clock;
