import React from "react";

// Code CoordinatesButton Component Here
export default class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render(){
        return(
            <button
                onClick={this.handleClick}
            >Get Coordinates</button>
        )
    }
}