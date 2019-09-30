import React from "react";
import ListItem from "./ListItem";
import formatMoveDescription from './../../utils/formatMoveDescription';
import PropTypes from "prop-types";

const MoveList = ({ hovered, onClick, moves }) => (
    <ol>
        {moves.map(({ currentMove, move }) =>
            <ListItem
                key={move}
                isHovered={hovered === move}
                onClick={() => onClick(move)}
                description={formatMoveDescription(move, currentMove)}
            />
        )}
    </ol>
);

MoveList.propTypes = {
    hovered: PropTypes.number,
    onClick: PropTypes.func,
    moves: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number, PropTypes.number))
};

export default MoveList;

