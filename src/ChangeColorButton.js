import React from 'react';

class ChangeColorButton extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleClickInChild = this.handleClickInChild.bind(this);
    }
 
    handleClickInChild() {
        console.log('handler in Child');
        this.props.handleClickInParent();
    }

    render() {
        return(
            <button onClick={this.handleClickInChild}>
                I don't like {this.props.currentColor}!
            </button>
        );
    }
}

export default ChangeColorButton;
