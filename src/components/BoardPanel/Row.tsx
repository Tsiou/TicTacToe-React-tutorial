import { SquareContent } from "../../types/Game";
import Square from "./Square";

interface RowProps {
	positions: Array<number>;
	squares: Array<SquareContent>;
	winningLine: Array<number>;
	onClick(position: number): void;
	onMouseOver(position: number): void;
	onMouseOut: React.MouseEventHandler<HTMLElement>;
}

const Row: React.FC<RowProps> = ({
	positions,
	squares,
	winningLine,
	onClick,
	onMouseOut,
	onMouseOver,
}) => (
	<div className="board-row">
		{positions.map((position) => (
			<Square
				key={position}
				value={squares[position % 3]}
				isWinningSquare={winningLine.includes(position)}
				onClick={() => onClick(position)}
				onMouseOut={onMouseOut}
				onMouseOver={() => onMouseOver(position)}
			/>
		))}
	</div>
);

export default Row;
