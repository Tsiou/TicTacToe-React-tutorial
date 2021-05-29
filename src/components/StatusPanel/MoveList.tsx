import ListItem from "./ListItem";

interface MoveListProps {
	hovered: number | null;
	onClick: (move: number) => void;
	moves: Array<{ currentMove: number | null; move: number }>;
}

const MoveList: React.FC<MoveListProps> = ({ hovered, onClick, moves }) => {
	return (
		<ol>
			{moves.map((moveItem) => {
				const { currentMove, move } = moveItem;
				const isHovered = hovered !== null && currentMove === hovered;
				return (
					<ListItem
						key={move}
						isHovered={isHovered}
						onClick={() => onClick(move)}
						move={moveItem}
					/>
				);
			})}
		</ol>
	);
};

export default MoveList;
