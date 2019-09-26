import React from "react";
import ListItem from "./ListItem";
import formatMoveDescription from './../../utils/formatMoveDescription';

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
)

export default MoveList;

