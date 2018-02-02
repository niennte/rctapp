import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColorBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "red"
        };
    this.changeColor = this.changeColor.bind(this);
    }

    componentDidMount() {
        console.log(this);
        console.log(this.props);
        console.log(this.state);
    }


    changeColor() {
        console.log('Handler in Parent');
        // this may not work because of async state stacking
        /*
        let newColor = this.state.backgroundColor === "red" ?
            "blue" : "red";
        this.setState({
            backgroundColor: newColor
        });
        */
        // pass in a callback instead of an object
        this.setState((prevState) => {
            let newColor = prevState.backgroundColor === "red"?
                "blue" : "red";
            return {
                backgroundColor: newColor
            };
        });
    }
    
    render() {
        return(
            <div style={{
                margin: "auto",
                width: "200px",
                height: "200px",
                backgroundColor: this.state.backgroundColor
                }}>
                <ChangeColorButton 
                    currentColor={this.state.backgroundColor}
                    handleClickInParent={this.changeColor} />
            </div>
        );
    }
}

export default ColorBlock;

