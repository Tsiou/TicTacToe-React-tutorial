import React from "react";
import "./../../styles/Square.css";
import PropTypes from "prop-types";

const Square = ({ value, position, isWinningSquare, onClick, onMouseOver, onMouseOut }) => (
    <button className={"square" + (isWinningSquare ? " winning" : "")}
            onClick={() => onClick(position)} 
            onMouseOver={() => onMouseOver(position)} 
            onMouseOut={() => onMouseOut()}
            >
        {value}
    </button>
);

Square.propTypes = {
    value: PropTypes.string,
    position: PropTypes.number,
    isWinningSquare: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func
};

export default Square;