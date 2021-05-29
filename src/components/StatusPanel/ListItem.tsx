import formatMoveDescription from "../../utils/formatMoveDescription";

interface ListItemProps {
	move: {
		currentMove: number | null;
		move: number;
	};
	isHovered: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ListItem: React.FC<ListItemProps> = ({
	move: { currentMove, move },
	isHovered,
	onClick,
}) => {
	return (
		<li key={move}>
			<button className={isHovered ? "hovered" : ""} onClick={onClick}>
				{formatMoveDescription(move, currentMove)}
			</button>
		</li>
	);
};

export default ListItem;
