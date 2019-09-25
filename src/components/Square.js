import React from "react";
import "./../styles/Square.css";

const Square = ({ value, isWinningSquare, onClick, onMouseOver, onMouseOut }) => (
    <button className={"square" + (isWinningSquare ? " winning" : "")}
            onClick={onClick} 
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut}
            >
        {value}
    </button>
);

export default Square;