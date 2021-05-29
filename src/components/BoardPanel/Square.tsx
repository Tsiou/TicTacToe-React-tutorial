import { SquareContent } from "../../types/Game";

import "./../../styles/Square.css";

interface SquareProps {
	value: SquareContent;
	isWinningSquare: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	onMouseOver: React.MouseEventHandler<HTMLElement>;
	onMouseOut: React.MouseEventHandler<HTMLElement>;
}

const Square: React.FC<SquareProps> = ({
	value,
	isWinningSquare,
	onClick,
	onMouseOver,
	onMouseOut,
}) => {
	const classes = `square${isWinningSquare ? " winning" : ""}`;

	return (
		<button
			className={classes}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
		>
			{value}
		</button>
	);
};

export default Square;
