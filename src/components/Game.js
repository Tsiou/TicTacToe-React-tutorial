import React, { useState } from "react";
import "./../styles/Game.css";
import Board from "./BoardPanel/Board";
import calculateWinner from "./../utils/calculateWinner";
import StatusPanel from "./StatusPanel/StatusPanel";
import currentStatusText from "./../utils/currentStatusText";

const Game = () => {
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setNext] = useState(true);
	const [history, setHistory] = useState([
		{
			squares: Array(9).fill(null),
			currentMove: null,
		},
	]);
	const [hovered, setHovered] = useState(null);

	const handleClick = (markedTile) => {
		const currHistory = history.slice(0, stepNumber + 1);
		const current = currHistory[currHistory.length - 1];
		const squares = current.squares.slice();
		if (squares[markedTile]) {
			return;
		}

		const { draw, winner } = calculateWinner(squares);
		if (winner || draw) {
			return;
		}

		squares[markedTile] = xIsNext ? "X" : "O";
		setHistory([
			...currHistory,
			{
				squares: squares,
				currentMove: markedTile,
			},
		]);
		setStepNumber(currHistory.length);
		setNext(!xIsNext);
	};

	const jumpTo = (step) => {
		setStepNumber(step);
		setNext(step % 2 === 0);
	};

	const handleMouseOver = (tileNumber) => {
		setHovered(tileNumber);
	};

	const handleMouseOut = () => {
		setHovered(null);
	};

	const current = history[stepNumber];
	const { winningLine, draw, winner } = calculateWinner(current.squares);
	const currentStatus = currentStatusText(
		winner,
		draw,
		current.squares[winningLine[0]],
		xIsNext
	);
	const moves = history.map(({ currentMove }, move) => ({ currentMove, move }));

	return (
		<div className="game">
			<Board
				winningLine={winningLine}
				squares={current.squares}
				onClick={handleClick}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			/>
			<StatusPanel
				status={currentStatus}
				moves={moves}
				hovered={hovered}
				onClick={jumpTo}
			/>
		</div>
	);
};

export default Game;
