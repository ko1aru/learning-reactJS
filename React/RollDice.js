import React, { Component } from 'react';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: 1,
            die2: 1
        };
    }

    die1Num = () => Math.floor(Math.random() * (6+1));
    die2Num = () => Math.floor(Math.random() * (6+1));

    handleSubmit = () => {
        this.setState(() => ({
            die1: this.die1Num(),
            die2: this.die2Num()
        }));
    }

    render() {
        return (
            <div>
                <h1>ROLL DICE</h1>
                <p>Die 1 = {this.state.die1}</p>
                <p>Die 2 = {this.state.die2}</p>
                <h3>Total = {this.state.die1 + this.state.die1}</h3>
                <button onClick={this.handleSubmit}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;