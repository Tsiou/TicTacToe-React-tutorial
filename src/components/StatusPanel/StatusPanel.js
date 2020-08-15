import React, { useState } from "react";
import MoveList from "./MoveList";
import SortButton from "./SortButton";
import PropTypes from "prop-types";

const StatusPanel = ({ status, moves, ...childProps }) => {
	const [isAscending, setAscending] = useState(true);

	const sortedMoves = [
		moves[0],
		...moves
			.slice(1)
			.sort((a, b) => (isAscending ? a.move > b.move : a.move < b.move)),
	];

	return (
		<div className="game-info">
			<div>{status}</div>
			<SortButton
				isAscending={isAscending}
				changeSorting={() => setAscending(!isAscending)}
			/>
			<MoveList {...{ moves: sortedMoves, ...childProps }} />
		</div>
	);
};

StatusPanel.propTypes = {
	status: PropTypes.string,
	moves: PropTypes.arrayOf(
		PropTypes.objectOf(PropTypes.number, PropTypes.number)
	),
	onClick: PropTypes.func,
	hovered: PropTypes.number,
};

export default StatusPanel;
