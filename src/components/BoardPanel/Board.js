import React, { Component } from "react";
import "./../../styles/Board.css";
import Row from "./Row";

class Board extends Component {
    render() {
        const rows = [];
        for (let rowIndex = 0; rowIndex < 9; rowIndex += 3) {
            const row = [];
            const startingIndex = rowIndex;
            for (let index = startingIndex; index < startingIndex + 3; index++) {
                row.push(index);
            }
            rows.push(row);
        }

        return (
            <div className="game-board">
                {rows.map((row, index) =>
                    <Row
                        key={index}
                        positions={row}
                        {...this.props}
                    ></Row>
                )}
            </div>
        )
    }
}

export default Board;