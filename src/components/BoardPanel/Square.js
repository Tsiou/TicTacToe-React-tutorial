import React from "react";
import "./../../styles/Square.css";
import PropTypes from "prop-types";

export default function Square ({ value, isWinningSquare, onClick, onMouseOver, onMouseOut }){
    const classes = `square${isWinningSquare ? " winning" : ""}`;

    return (
        <button className={classes}
                onClick={onClick} 
                onMouseOver={onMouseOver} 
                onMouseOut={onMouseOut}
                >
            {value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string,
    isWinningSquare: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func
};