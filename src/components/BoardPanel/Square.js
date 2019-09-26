import React from "react";
import "./../../styles/Square.css";

const Square = ({ value, position, isWinningSquare, onClick, onMouseOver, onMouseOut }) => (
    <button className={"square" + (isWinningSquare ? " winning" : "")}
            onClick={() => onClick(position)} 
            onMouseOver={() => onMouseOver(position)} 
            onMouseOut={() => onMouseOut()}
            >
        {value}
    </button>
);

export default Square;