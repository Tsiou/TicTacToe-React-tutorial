import React, { Component } from "react";
import "./../styles/Game.css";
import Board from "./Board";
import calculateWinner from "./../utils/calculateWinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

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
            isAscending: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const { draw, winner } = calculateWinner(squares);
        if (winner || draw || squares[i]) {
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

    changeSorting() {
        this.setState({
            isAscending: !this.state.isAscending
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

        const moves = history.map((step, move) => {
            const row = Math.floor(step.currentMove / 3) + 1;
            const col = step.currentMove % 3 + 1;
            const isHovered = this.state.hovered !== null && step.currentMove === this.state.hovered;

            const desc = move ?
                `Go to move #${move} (${row}, ${col})` :
                'Go to game start';
            return (
                <li key={move}>
                    <button
                        className={(isHovered ? "hovered" : "")}
                        onClick={() => this.jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + current.squares[winningLine[0]];
        } else if (draw) {
            status = "The game is a draw!";
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        const isAscending = this.state.isAscending;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winningLine={winningLine}
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                        hovered={this.state.hovered}
                        onMouseOver={i => this.handleMouseOver(i)}
                        onMouseOut={() => this.handleMouseOut()}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button

                        onClick={() => this.changeSorting()}
                    >
                        {isAscending
                            ? <span>sorting: <FontAwesomeIcon icon={faArrowDown} /></span>
                            : <span>sorting:  <FontAwesomeIcon icon={faArrowUp} /></span>
                        }
                    </button>
                    <ol>
                        {isAscending
                            ? [moves[0], ...moves.slice(1).sort((a, b) => a.key > b.key)]
                            : [moves[0], ...moves.slice(1).sort((a, b) => a.key < b.key)]
                        }</ol>
                </div>
            </div>
        );
    }
}

export default Game;