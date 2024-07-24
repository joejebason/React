import React, { Component } from "react";

// The state is a react object that is used to contain and manage data within the component.

class State extends Component{
    constructor(){
        super();
        this.state ={toggleOn: false}; // initial state ,  it is object of key : value
    }

    handleClick(){
        this.setState({toggleOn:!this.state.toggleOn}); // setState -> predefine method , it modify the data
    }
    render(){

        return(
            <>
            <p>Welcome to the State Concept</p>
            <button onClick={() =>this.handleClick()} > {this.state.toggleOn ? 'ON' : 'OFF'}</button>
            </>
        )
    }
}

export default State;