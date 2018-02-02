import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return(
            <form>
                <input type="text" placeholder="Search" />
                <p>
                    <input type="checkbox" />Only show stocked products
                </p>
            </form>
        );
    }
}

export default Filters;
