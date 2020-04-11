import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const MoveList = ({ hovered, onClick, moves }) => {
  return (
    <ol>
      {moves.map(moveItem => {
        const { currentMove, move } = moveItem;
        const isHovered = hovered !== null && currentMove === hovered;
        return (
          <ListItem
            key={move}
            isHovered={isHovered}
            onClick={() => onClick(move)}
            move={moveItem}
          />
        );
      })}
    </ol>
  );
};

MoveList.propTypes = {
  hovered: PropTypes.number,
  onClick: PropTypes.func,
  moves: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.number, PropTypes.number)
  )
};

export default MoveList;