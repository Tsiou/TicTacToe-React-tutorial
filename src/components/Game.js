import React, { Component } from "react";
import "./../styles/Game.css";
import Board from "./BoardPanel/Board";
import calculateWinner from "./../utils/calculateWinner";
import StatusPanel from "./StatusPanel/StatusPanel";
import currentStatusText from './../utils/currentStatusText';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    currentMove: null
                }
            ],
            stepNumber: 0,
            xIsNext: true,
            hovered: null,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const { draw, winner } = calculateWinner(squares);
        if (squares[i] || winner || draw) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                    currentMove: i
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    handleMouseOver(i) {
        this.setState({
            hovered: i
        })
    }

    handleMouseOut() {
        this.setState({
            hovered: null
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const { winningLine, draw, winner } = calculateWinner(current.squares);

        return (
            <div className="game">

                <Board
                    winningLine={winningLine}
                    squares={current.squares}
                    onClick={i => this.handleClick(i)}
                    hovered={this.state.hovered}
                    onMouseOver={i => this.handleMouseOver(i)}
                    onMouseOut={() => this.handleMouseOut()}
                />
                <StatusPanel
                    status={currentStatusText(winner, draw, current.squares[winningLine[0]], this.state.xIsNext)}
                    moves={history.map(({currentMove}, move) => ({currentMove, move}))}
                    hovered={this.state.hovered}
                    onClick={step => this.jumpTo(step)}
                />
            </div>
        );
    }


}

export default Game;