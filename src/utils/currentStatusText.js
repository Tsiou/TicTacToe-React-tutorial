const currentStatusText = (winner, draw, winnerMark, xIsNext ) => {
    if (winner) {
        return "Winner: " + winnerMark;
    }
    else if (draw) {
        return "The game is a draw!";
    }
    else {
        return "Next player: " + (xIsNext ? "X" : "O");
    }

}

export default currentStatusText;