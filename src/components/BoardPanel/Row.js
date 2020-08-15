import React from "react";
import Square from "./Square";
import PropTypes from "prop-types";

const Row = ({ positions, squares, winningLine, onClick, onMouseOut, onMouseOver }) => (
  <div className="board-row">
    {positions.map(position => (
      <Square
        key={position}
        value={squares[position % 3]}
        isWinningSquare={winningLine.includes(position)}
        onClick={() => onClick(position)}
        onMouseOut={onMouseOut}
        onMouseOver={() => onMouseOver(position)}
      />
    ))}
  </div>
);

Row.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.number),
  squares: PropTypes.arrayOf(PropTypes.string),
  winningLine: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};

export default Row;