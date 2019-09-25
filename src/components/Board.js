import React, { Component } from "react";
import "./../styles/Board.css";
import Square from "./Square";
import Row from "./Row";


class Board extends Component {
    renderSquare(i) {
        const isWinningSquare = this.props.winningLine.includes(i);
        return (
            <Square
                key={i}
                isWinningSquare={isWinningSquare}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                onMouseOver={() => this.props.onMouseOver(i)}
                onMouseOut={() => this.props.onMouseOut()}
            />
        );
    }

    render() {
        const rows = [];
        for (let rowIndex = 0; rowIndex < 9; rowIndex+=3) {
            const row = [];
            const startingIndex = rowIndex;
            for (let index = startingIndex; index < startingIndex + 3; index++) {
                row.push(this.renderSquare(index));
            }
            rows.push(row);
        }

        return (
            rows.map((row, index) =>
                <Row
                    key={index}
                    items={row}
                ></Row>
            )
        )
    }
}

export default Board;