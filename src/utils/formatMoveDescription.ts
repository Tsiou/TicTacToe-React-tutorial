const formatMoveDescription = (move: number, currentMove: number | null) => {
    const row = Math.floor(currentMove?? 0 / 3) + 1;
    const col = currentMove ?? 0 % 3 + 1;

    return move ?
        `Go to move #${move} (${row}, ${col})` :
        'Go to game start';
}

export default formatMoveDescription;