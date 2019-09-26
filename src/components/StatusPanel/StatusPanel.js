import React, { useState } from "react";
import MoveList from "./MoveList";
import SortButton from "./SortButton";

const StatusPanel = ({ status, moves, hovered, onClick }) => {
    const [isAscending, setAscending] = useState(true);

    const sortedMoves = [moves[0], ...moves.slice(1).sort((a, b) =>
        (isAscending ? a.move > b.move : a.move < b.move))
    ]

    return (

        <div className="game-info">
            <div>{status}</div>
            <SortButton
                isAscending={isAscending}
                changeSorting={() => setAscending(!isAscending)}
            />
            <MoveList
                hovered={hovered}
                onClick={onClick}
                moves={sortedMoves}
            />
        </div>
    );
}

export default StatusPanel;