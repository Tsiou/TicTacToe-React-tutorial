import React from "react";

const MoveList = ({ isAscending, moves }) => (
    <ol>
        {
            isAscending
                ? [moves[0], ...moves.slice(1).sort((a, b) => a.key > b.key)]
                : [moves[0], ...moves.slice(1).sort((a, b) => a.key < b.key)]
        }
    </ol>
)

export default MoveList;

