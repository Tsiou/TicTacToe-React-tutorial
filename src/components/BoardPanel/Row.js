import React from "react";
import Square from "./Square";
import PropTypes from "prop-types";

const Row = ({ positions, squares, winningLine, ...childProps }) => (
  <div className="board-row">
    {positions.map(position => (
      <Square
        key={position}
        position={position}
        value={squares[position % 3]}
        isWinningSquare={winningLine.includes(position)}
        {...childProps}
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