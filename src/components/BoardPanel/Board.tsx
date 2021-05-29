import { SquareContent } from "../../types/Game";

import { MouseEventHandler } from "react";
import "./../../styles/Board.css";
import Row from "./Row";

interface BoardProps {
	squares: Array<SquareContent>;
	winningLine: Array<number>;
	onClick: (position: number) => void;
	onMouseOver: (position: number) => void;
	onMouseOut: MouseEventHandler<HTMLElement>;
}

const Board : React.FC<BoardProps> = ({ squares, ...childProps }) => {
	const rows = [];
	for (let rowIndex = 0; rowIndex < 9; rowIndex += 3) {
		const row = [];
		const startingIndex = rowIndex;
		for (let index = startingIndex; index < startingIndex + 3; index++) {
			row.push(index);
		}
		rows.push(row);
	}

	return (
		<div className="game-board">
			{rows.map((row, index) => (
				<Row
					key={index}
					positions={row}
					squares={squares.slice(row[0], row[0] + 3)}
					{...childProps}
				></Row>
			))}
		</div>
	);
};

export default Board;
