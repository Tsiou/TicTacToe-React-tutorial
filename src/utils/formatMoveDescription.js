const formatMoveDescription = (move, currentMove) => {
    const row = Math.floor(currentMove / 3) + 1;
    const col = currentMove % 3 + 1;

    return move ?
        `Go to move #${move} (${row}, ${col})` :
        'Go to game start';
}

export default formatMoveDescription;