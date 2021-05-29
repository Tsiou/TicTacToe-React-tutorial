export type SquareContent = "X" | "O" | null;

export interface HistoryItem {
	squares: Array<SquareContent>;
	currentMove: number | null;
}