import React from "react";
import Square from "./Square";

const Row = ({positions, squares, winningLine, onClick, onMouseOver, onMouseOut }) => (
    <div className="board-row">
        {positions.map(position => (
            <Square
                key={position}
                position={position}
                value={squares[position]}
                isWinningSquare={winningLine.includes(position)}
                onClick={onClick}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            />
        ))}
    </div>
);

export default Row;