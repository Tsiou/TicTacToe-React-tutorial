import { useState } from "react";
import MoveList from "./MoveList";
import SortButton from "./SortButton";

interface StatusPanelProps {
	status: string;
	moves: Array<{ currentMove: number | null; move: number }>;
	onClick: (move: number) => void;
	hovered: number | null;
}

const StatusPanel: React.FC<StatusPanelProps> = ({
	status,
	moves,
	...childProps
}) => {
	const [isAscending, setAscending] = useState(true);

	const sortedMoves = [
		moves[0],
		...moves
			.slice(1)
			.sort((a, b) => (isAscending ? a.move - b.move : b.move - a.move)),
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

export default StatusPanel;
