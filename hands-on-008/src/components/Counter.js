import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    decreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    alertHello = (member) => {
        window.alert(`Hello ${member}`);
    } 

    render() {
        return (
            <div>
                <p> {this.state.counter} </p>
                <button onClick={() => { this.alertHello("Member1"); this.increaseCounter() }}>
                    Increment
                </button>
                <button onClick={this.decreaseCounter}>
                    Decrement
                </button>
            </div>
        );
    }
}

export default Counter;