import React from "react";
import formatMoveDescription from "./../../utils/formatMoveDescription";
import PropTypes from "prop-types";

const ListItem = ({ move: { currentMove, move }, isHovered, onClick }) => {
  return (
    <li key={move}>
      <button className={isHovered ? "hovered" : ""} onClick={onClick}>
        {formatMoveDescription(move, currentMove)}
      </button>
    </li>
  );
};

ListItem.propTypes = {
  move: PropTypes.objectOf(PropTypes.number, PropTypes.number),
  isHovered: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ListItem;