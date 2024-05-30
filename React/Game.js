import React, { Component, useState } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerChoice: '',
            computerChoice: '',
            playerScore: 0,
            computerScore: 0
        };
    }

    getComputerChoice = () => {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    determineWinner = (playerChoice, computerChoice) => {
        if(playerChoice === computerChoice) {
            return 'draw';
        } else if(
            (playerChoice==='Rock' && computerChoice==='Scissors') ||
            (playerChoice==='Paper' && computerChoice==='Rock') ||
            (playerChoice==='Scissors' && computerChoice==='Paper')
        ) {
            return 'player';
        } else {
            return 'computer';
        }
    };

    handlePlayerChoice = (choice) => {
        const computerChoice = this.getComputerChoice();
        const winner = this.determineWinner(choice, computerChoice);

        this.setState((prevState) => ({
            playerChoice: choice,
            computerChoice: computerChoice,
            playerScore: winner==='player' ? prevState.playerScore+1 : prevState.playerScore,
            computerScore: winner==='computer' ? prevState.computerScore+1: prevState.computerScore
        }));
    };
    
    render() {
        return(
            <div>
                <h1>WELCOME TO ROCK, PAPER, SCISSORS GAME</h1>
                <div>
                    <button onClick={() => this.handlePlayerChoice('Rock')}>Rock</button>
                    <button onClick={() => this.handlePlayerChoice('Paper')}>Paper</button>
                    <button onClick={() => this.handlePlayerChoice('Scissors')}>Scissor</button>
                </div>

                <div>
                    <h3>YOUR CHOICE: {this.state.playerChoice}</h3>
                </div>
                <div>
                    <h3>COMPUTER'S CHOICE: {this.state.computerChoice}</h3>
                </div>

                <div>
                    <h2>YOUR SCORE: {this.state.playerScore}</h2>
                </div>
                <div>
                    <h2>COMPUTER'S SCORE: {this.state.computerScore}</h2>
                </div>
            </div>
        );
    }
}

export default Game;