import React from "react";

// Code DelayedButton Component Here
export default class DelayedButton extends React.Component {
    handleClick = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)},
            this.props.delay)
    }

    render(){
        return (
            <button onClick={this.handleClick}>Delay
            </button>
        )
    }
}