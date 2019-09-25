const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let unwinnable = 0;
    for (const [a, b, c] of lines) {

        if ((squares[a] && squares[b] && squares[a] !== squares[b])
            || ( squares[b] && squares[c] && squares[b] !== squares[c])
            || ( squares[a] && squares[c] && squares[a] !== squares[c])) {
            unwinnable++;
        }

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winningLine: [a, b, c], draw: false, winner: true };
        }
    }
    return { winningLine: [], winner: false, draw: unwinnable === lines.length };
}

export default calculateWinner;